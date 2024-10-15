import simpleForm from './simpleForm';

export default function App(){
  return (
      <form>


        <div>
          <label htmlFor='name'>Name</label>
          <input id='name' name='name' type='text'/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message'></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
  );
}