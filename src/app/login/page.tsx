import styles from './styles.module.css';
import Image from 'next/image';
import logo from './ig-logo-135.png';
import Link from 'next/link';
import bgImage from './bg.webp';

export default function Login() {
  return (
    <div
      className='h-screen bg-no-repeat flex items-center justify-center text-black'
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: '100% auto',
      }}
    >
      <div className='w-96 container mx-auto flex-col gap-6 space-y-1.5'>
        <div className='text-s font-bold text-center'>
          Как вы хотите использовать Threads?
        </div>
        <div className='border-solid border border-zinc-400 rounded-lg flex flex-col pt-5 pb-6 px-6 gap-1 cursor-pointer'>
          <div className='text-s font-semibold flex items-center gap-3'>
            <div>Продолжить с аккаунтом Instagram</div>
            <Image src={logo} height={32} width={32} alt='Logo'></Image>
          </div>
          <div className='text-xs text-zinc-500 font-normal'>
            Войдите в профиль Threads или создайте его через аккаунт Instagram.
            Вы сможете публиковать контент в Threads и взаимодейтсвовать с ним.
          </div>
        </div>
        <div className='border-solid border border-zinc-400 rounded-lg flex flex-col pt-5 pb-6 px-6 gap-1 cursor-pointer'>
          <div className='text-s font-semibold flex items-center gap-3'>
            Использовать без профиля
          </div>
          <div className='text-xs text-zinc-500 font-normal'>
            Вы можете пользоваться Threads без профиля, но тогда вы не сможете
            публиковать контент и взаимодейтсвовать с ним.
          </div>
        </div>
        <div className='text-xs text-zinc-500 flex gap-3 absolute inset-x-0 bottom-0 w-screen justify-center '>
          <Link href='/login'>© 2024</Link>
          <Link href='/login'>Условия Threads</Link>
          <Link href='/login'>Политика конфиденциальности</Link>
          <Link href='/login'>Политику в отношении файлов cookie</Link>
          <Link href='/login'>Настройки файлов cookie</Link>
          <Link href='/login'>Сообщить о проблеме</Link>
        </div>
      </div>
    </div>
  );
}
