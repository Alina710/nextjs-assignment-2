import Link from 'next/link';
import Image from 'next/image';

const countries  =  [
  {
             name: 'Canada',
    population:  '37 million',
    capital: 'Ottawa',
        flag:  'https://flagcdn.com/ca.svg',
  },




  {
    name: 'India',
       population: '1.4 billion',
        capital: 'New Delhi',
    flag: 'https://flagcdn.com/in.svg',
  },
  {
    name: 'Australia',
  population: '25 million',
    capital: 'Canberra',
    flag: 'https://flagcdn.com/au.svg',
  },
  {

  name: 'Germany',
    population: '83 million',
    capital: 'Berlin',
       flag:    'https://flagcdn.com/de.svg',
  },


  {
    name:  'Japan',
    population: '126 million',
    capital: 'Tokyo',
    flag: 'https://flagcdn.com/jp.svg',
  },
  
];

export default function Home() {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-5">
  <h1 className="text-5xl font-bold text-white mb-6">Countries List</h1>
     <ul className="space-y-4 mb-6">
           {countries.map((country) => (
      <li
            key={country.name}
            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 flex items-center"
          >
   <Image
              src={country.flag}
      alt={`${country.name} flag`}
              width={40}
      height={30}
              className="mr-4"
              />
    <Link
              href={`/country/${country.name.toLowerCase()}`}
    className="text-xl font-semibold text-blue-600 hover:underline"
            >
       {country.name}
            </Link>
          </li>
    ))
    }
</ul>
      <div className="text-white text-lg text-center mt-4">
          <p>Crafted with love by an aspiring developer</p>
      
    </div>
     </div>
);
}
