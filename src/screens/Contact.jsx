import { useForm } from 'react-hook-form'
import Promise from 'promise'

const wait = (duration = 1000) =>
  new Promise(resolve => {
    window.setTimeout(resolve, duration)
  })

const Contact = () => {
  // register fonction qui stock valeur enregistree dans un champ
  // handleSubmit fonction qui permet de transferer les donnees
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors }
  } = useForm()
  const { isSubmitting } = formState

  const onSubmit = async data => {
    await wait(2000)
    console.log(data)
  }

  console.log(errors)

  return (
    <div className='center-container'>
      <div className='left-container'>
        <h3>Contact me</h3>
        <p>
          If you have any questions regarding my projects feel free to contact
          me.
        </p>
        <div className='form row'>
          <form
            className='col-md-6 form-group'
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor='firstName'>First name :</label>
            <input
              type='text'
              className='form-control is-invalid'
              id='firstName'
              name='firstName'
              {...register('firstName', {
                required: true
              })}
            />
            <p className='invalid-feedback'>
              {errors.firstName?.type === 'required' &&
                'First name is required'}
            </p>

            <label htmlFor='lastName'>Last name :</label>
            <input
              type='text'
              className='form-control is-invalid'
              id='lastName'
              name='lastName'
              {...register('lastName', {
                required: true,
                pattern: /^[a-zA-Z\s]*$/
              })}
            />
            <p className='invalid-feedback'>
              {errors.lasttName?.type === 'required' && 'Last name is required'}
            </p>

            <label htmlFor='email'>Email :</label>
            <input
              type='text'
              className='form-control is-invalid'
              id='email'
              name='email'
              {...register('emailAddress', {
                required: 'you have to write a valid mail address',
                pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
              })}
            />

            <label htmlFor='subject'>Subject :</label>
            <input
              type='text'
              className='form-control is-invalid'
              id='subject'
              name='subject'
              {...register('subject', {
                required: 'you have to write a subject'
              })}
            />

            <label htmlFor='message'>Message : </label>
            <input
              type='text'
              className='form-control is-invalid'
              id='message'
              name='message'
              {...register('yourMessage', {
                required: 'you have to write a message'
              })}
            />

            <button disabled={isSubmitting} className='form-btn'>
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <div className='right-container'></div>
    </div>
  )
}

export default Contact
