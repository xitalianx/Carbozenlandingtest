'use client'

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, Phone, ArrowRightIcon, MessageSquare, Clock4 } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    hour: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = {
        name: e.target.name.value,
        number: e.target.number.value,
        hour: e.target.hour.value,
        message: e.target.message.value
      };
  
      await emailjs.send('service_ylk9s94', 'template_jdvipzd', formData, 't3IrRAdjwhR2z2lHH');
      alert('Abbiamo ricevuto la tua richiesta informazioni! Grazie');
    } catch (error) {
      console.error('Errore durante l\'invio dell\'email:', error);
      alert('Si è verificato un errore durante l\'invio dell\'email.');
    }
  };

  return (
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='text' name='name' placeholder='Nome' value={formData.name} onChange={handleChange} />
        <User className='absolute right-6' size={20} />
      </div>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='number' name='number' placeholder='Numero' value={formData.number} onChange={handleChange} />
        <Phone className='absolute right-6' size={20} />
      </div>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='text' name='hour' placeholder='Orario in cui venire contattati' value={formData.hour} onChange={handleChange} />
        <Clock4 className='absolute right-6' size={20} />
      </div>
      {/* textarea */}
      <div className='relative flex items-center'>
        <Textarea name='message' placeholder='Il tuo messaggio' value={formData.message} onChange={handleChange} />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button type='submit' className='flex items-center gap-x-1 max-w-[366px]'>
        Si, voglio essere contattato
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
