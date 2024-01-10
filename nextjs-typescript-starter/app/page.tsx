
import Link from 'next/link';
import UserCard from './components/userCard';
// TODO: Create a mock card component.
// TODO: Update DB to include SKILLS



export default function Page() {


  return (
<div className="md:container md:mx-auto">
<div className="columns-1">    <UserCard number="1" />
<UserCard number="2"/>
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg" alt=""></img>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Skill</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Users Name.</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience.</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Other Skills.</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Methods of Communication.</p>

    </div>
</a>
</div>


    </div>
  );
}
