
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, Repeat, SkipForward, LayoutList, Mic2, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href='' className='flex items-center gap-2 text-sm font-semibold text-zinc-100'>
              <HomeIcon />
              Home
            </a>
            <a href='' className='flex items-center gap-2 text-sm font-semibold text-zinc-100'>
              <Search />
              Search
            </a>
            <a href='' className='flex items-center gap-2 text-sm font-semibold text-zinc-100'>
              <Library />
              Your Libery
            </a>
          </nav>
          <nav className='mt-6 pt-6 border-t border-zinc-500 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Aniversario</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Aniver Funk</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>My Playlist</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Niver Diegonica</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Daily Mix</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Hits da Internet</a>
            </nav>
        </aside>
        <main className='flex-1 p-6'>
         <div className='flex items-center gap-3'>
          <button className='rounded-full bg-black/40 p-1'>
            <ChevronLeft />
          </button>
          <button className='rounded-full bg-black/40 p-1'>
            <ChevronRight />
          </button>
         </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors'>
              <Image src='/album.jpg' width={140} height={110} alt='Capa do Album Fo Fitgher' />
              <strong>Wasting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors'>
              <Image src='/album.jpg' width={140} height={110} alt='Capa do Album Fo Fitgher' />
              <strong>Wasting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors'>
              <Image src='/album.jpg' width={140} height={110} alt='Capa do Album Fo Fitgher' />
              <strong>Wasting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors'>
              <Image src='/album.jpg' width={140} height={110} alt='Capa do Album Fo Fitgher' />
              <strong>Wasting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors'>
              <Image src='/album.jpg' width={140} height={110} alt='Capa do Album Fo Fighters' />
              <strong>Wasting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 trasition-colors'>
              <Image src='/album.jpg' width={140} height={110} alt='Capa do Album Fo Fitgher' />
              <strong>Wasting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h1 className='font-semibold text-2xl mt-10'>Made for Diego Schell Fernandes</h1>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/album.jpg' className='w-full' width={140} height={110} alt='Capa do Album Fo Fitgher' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>            
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/album.jpg' className='w-full' width={140} height={110} alt='Capa do Album Fo Fitgher' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>            
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/album.jpg' className='w-full' width={140} height={110} alt='Capa do Album Fo Fitgher' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>            
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/album.jpg' className='w-full' width={140} height={110} alt='Capa do Album Fo Fitgher' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>            
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/album.jpg' className='w-full' width={140} height={110} alt='Capa do Album Fo Fitgher' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, Coin, girl in red and more</span>            
            </a>
          </div>
        </main>
      </div>
      <footer className='bg-zinc-900 border-t border-zinc-700 p-5 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image src="/album.jpg" width={76} height={76} alt='Capa do Album Fo Fitgher' />
          <div className='flex flex-col'>
            <strong className='font-normal'>Rope</strong>
            <span className='text-xs text-zinc-400'>Foo Fighters</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />

            <button className=" w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2 m-1'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>

        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
        <div className='flex items-center gap-2'>
        <Volume size={20} />
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
            <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
          </div> 
        </div>
        <Maximize2 size={20} />
        </div>         
      </footer>
    </div>
  )
}
