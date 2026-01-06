'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Имя слишком короткое'),
  email: z.string().email('Некорректный email'),
  message: z.string().min(10, 'Сообщение должно быть не менее 10 символов'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Сообщение отправлено!');
        reset();
      } else {
        toast.error('Ошибка при отправке');
      }
    } catch (error) {
      toast.error('Что-то пошло не так');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Имя</label>
        <input
          id="name"
          {...register('name')}
          className="w-full p-2 bg-teal-100 rounded border border-teal-700 text-gray-800"
        />
        {errors.name && <p className="text-red-400 mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full p-2 bg-teal-100 rounded border border-teal-700 text-gray-800"
        />
        {errors.email && <p className="text-red-400 mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2">Сообщение</label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className="w-full p-2 bg-teal-100 rounded border border-teal-700 text-gray-800"
        />
        {errors.message && <p className="text-red-400 mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-teal-300 hover:bg-teal-500 rounded-lg transition-colors"
      >
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;