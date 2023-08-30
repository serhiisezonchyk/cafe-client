import React from 'react';
import './Order.scss';
import { useForm } from 'react-hook-form';
import { orderValidation } from '../../utils/validators/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import sendNotification from '../alert/notification';

const Order = () => {
  const formSchemaObject = zodResolver(orderValidation);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: formSchemaObject,
  });
  const onSubmit = async (values) => {
    console.log(values);
    sendNotification('success', 'Дякуємо, найближчим часом з Вами звʼяжеться менеджер!')
    reset();
  };
  return (
    <section className='section-order'>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Забронювати стіл:</h2>
          <div className='form-item'>
            <input
              type='text'
              placeholder="Ім'я..."
              {...register('name')}
              className={errors.name && 'invalid-data'}
            />
            {errors.name && (
              <span role='alert' className='error'>
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className='form-item'>
            <input
              type='text'
              placeholder='Номер телефону...'
              {...register('phone')}
              className={errors.phone && 'invalid-data'}
            />
            {errors.phone && (
              <span role='alert' className='error'>
                {errors.phone?.message}
              </span>
            )}
          </div>

          <div className='datepicker'>
            <input className='date-input' {...register('date')} type='date' />
            <input className='time-input' {...register('time')} type='time' />
          </div>
          <button>Створити</button>
        </form>
      </div>
    </section>
  );
};

export default Order;
