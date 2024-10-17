import Image from 'next/image';

interface CountryProps {
  name: string;
  population: string;
  capital: string;
  flag: string;
  language: string;
  currency: string;
  region: string;
}

export default function CountryCard({
  name,
  population,
  capital,
  flag,
  language,
  currency,
  region,
}: CountryProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
      <Image src={flag} alt={`${name} flag`} width={100} height={60} className="mb-4" />
      <h1 className="text-3xl font-bold text-center mb-4">{name}</h1>
      <p className="mt-2 text-lg"><strong>Population:</strong> {population}</p>
      <p className="mt-2 text-lg"><strong>Capital:</strong> {capital}</p>
      <p className="mt-2 text-lg"><strong>Language:</strong> {language}</p>
      <p className="mt-2 text-lg"><strong>Currency:</strong> {currency}</p>
      <p className="mt-2 text-lg"><strong>Region:</strong> {region}</p>
    </div>
  );
}
