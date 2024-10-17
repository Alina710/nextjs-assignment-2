"use client";

import { usePathname, useRouter } from 'next/navigation';
import CountryCard from    '@/components/CountryCard';

interface Country {
      name: string;
  population: string;
      capital: string;
  flag: string;
  language: string;
currency: string;
    region: string;
}

const countryData: Record<string, Country> = {
  canada: {
    name: 'Canada',
 population: '37 million',
      capital: 'Ottawa',
    flag:   'https://flagcdn.com/ca.svg',
    language: 'English & French',
      currency: 'Canadian Dollar',
    region: 'North America',
  },





  india:    {
     name:   'India',
    population: '1.4 billion',
       capital: 'New Delhi',
    flag: 'https://flagcdn.com/in.svg',
language: 'Hindi & English',
   currency: 'Indian Rupee',
    region: 'Asia',
  }  ,


  australia: {
   name: 'Australia',
      population: '25 million',
    capital: 'Canberra',
  flag: 'https://flagcdn.com/au.svg',
       language: 'English',
    currency: 'Australian Dollar',
   region: 'Oceania',
  },

  
  germany: {
      name: 'Germany',
    population: '83 million',
    capital: 'Berlin',
 flag: 'https://flagcdn.com/de.svg',
    language: 'German',
    currency: 'Euro',
      region: 'Europe',
  },
  japan: {
      name: 'Japan',
    population: '126 million',
  capital: 'Tokyo',
   flag: 'https://flagcdn.com/jp.svg',
    language: 'Japanese',
       currency: 'Japanese Yen',
region: 'Asia',
  },
};

    export default function  CountryPage() {
      const pathname = usePathname();
 const router = useRouter();
    const country_name = pathname.split('/').pop();

  if (typeof country_name !== 'string')    {
          return    <p className="text-red-500">  Invalid country!</p>;
  }

        const country = countryData[country_name.toLowerCase() as keyof typeof countryData];

  if (!country) {
        return <p className="text-red-500">   Country not found!</p>;
  }

return (
      <div    className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
         <CountryCard
    name={country.name}
        population={country.population}
    capital={country.capital}
  flag={country.flag}
        language={country.language}
            currency={country.currency}
    region={country.region}
      />
      <button
   className="mt-4 w-full py-2 bg-blue-600  text-white rounded-lg hover:bg-blue-700   transition"
        onClick={() => router.push('/')}
      >
  Back to Country List
          </button>
  </div>
  );
}
