import { Metadata, ResolvingMetadata } from 'next';
import ArticleClientComponent from './ArticleClientComponent';

type ArticleData = {
  id: string;
  title: string;
  author: string;
  date: string;
  categories: string[];
  intro: string;
  imageUrl: string;
  secondaryImageUrl: string;
  imageCredit: string;
  paragraphs: string[];
  servicesProvided: {
    [category: string]: string[];
  };
};

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const response = await fetch(`http://localhost:3000/api/case/${id}`);
  const data: ArticleData = await response.json();

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: data.title,
    description: data.intro,
    openGraph: {
      images: [data.imageUrl, ...previousImages],
      description: data.intro,
    },
  }
}

import { headers } from 'next/headers';

async function getArticleData(id: string): Promise<ArticleData> {
  const headersList = headers();
  const domain = headersList.get('host') || '';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  
  const url = new URL(`/api/case/${encodeURIComponent(id)}`, `${protocol}://${domain}`);
  
  const res = await fetch(url.toString(), { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function Page({ params }: Props) {
  const data = await getArticleData(params.id);
  return <ArticleClientComponent initialData={data} />;
}