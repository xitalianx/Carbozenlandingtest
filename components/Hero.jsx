'use client'

import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiTimerFill,
  RiEmotionFill,
  RiImageFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';

const Hero = () => {

  // Componente per il testo con effetto blur
  function BlurText({ text, className, delay = 0.15 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
          animate={isVisible ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{
            delay: i * delay,
            duration: 0.9,
            ease: "easeOut",
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

  const iridescenceRef = useRef(null);

  useEffect(() => {
    if (!iridescenceRef.current) return;
    const ctn = iridescenceRef.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    const vertexShader = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0, 1);
    }
    `;

    const fragmentShader = `
    precision highp float;

    uniform float uTime;
    uniform vec3 uColor;
    uniform vec3 uResolution;
    uniform vec2 uMouse;
    uniform float uAmplitude;
    uniform float uSpeed;

    varying vec2 vUv;

    void main() {
      float mr = min(uResolution.x, uResolution.y);
      vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

      uv += (uMouse - vec2(0.5)) * uAmplitude;

      float d = -uTime * 0.5 * uSpeed;
      float a = 0.0;
      for (float i = 0.0; i < 8.0; ++i) {
        a += cos(i - d - a * uv.x);
        d += sin(uv.y * i + a);
      }
      d += uTime * 0.5 * uSpeed;
      vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
      col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
      gl_FragColor = vec4(col, 1.0);
    }
    `;

    let program;

    function resize() {
      const scale = 1;
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    window.addEventListener("resize", resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(0.2, 0.565, 0.702) }, // colore #3390B3
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uAmplitude: { value: 0.1 },
        uSpeed: { value: 1.0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId;

    function update(t) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    }
    ctn.addEventListener("mousemove", handleMouseMove);

    

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      ctn.removeEventListener("mousemove", handleMouseMove);
      ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  

  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-no-repeat bg-bottom bg-cover dark:bg-none relative'>
      
      {/* Iridescence Background */}
      <div ref={iridescenceRef} className="absolute inset-0 z-0"></div>

      <div className='container mx-auto relative z-10'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
              <BlurText
              text="Gestisci la glicemia nei pasti, vivi con serenità!"
              className="h1 mb-4 text-secondary-foreground"
              delay={0.15}
            />
            <p className='subtitle4 max-w-[490px] mx-auto xl:mx-0 '>
              <b>
              Carbozen è la prima app sviluppata per migliorare la vita dei diabetici.
              </b>
            </p>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 items-center mx-auto xl:mx-0 mb-12'>
              <Link href='/tutorial'>
                <Button className='text-tertiary gap-x-2'>
                  Scopri di più
                </Button>
              </Link>

              <p className='subtitle2 flex items-center h-10 mt-5'>oppure</p>

              <Link href='https://app.carbozen.it'>
                <Button className='text-tertiary gap-x-2'>
                  Inizia subito!
                </Button>
              </Link>
            </div>
            {/* socials */}
           {/* <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-secondary-foreground text-[22px] hover:text-primary transition-all'
            />*/}
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            {/* badge 1 */}
            <Badge
              containerStyles='absolute top-[24%] -left-[5rem]'
              icon={<RiTimerFill />}
              endCountNum={3}
              badgeText='Minuti per registrarsi '
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiImageFill />}
              endCountNum={6}
              endCountText='k'
              badgeText='Foto analizzate'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiEmotionFill />}
              endCountNum={0}
              badgeText='Pensieri'
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/developer.png'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;





