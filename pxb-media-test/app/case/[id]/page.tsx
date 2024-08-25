import { Metadata, ResolvingMetadata } from 'next';
import ArticleClientComponent from './ArticleClientComponent';
import { headers } from 'next/headers';

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

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getArticleData(params.id);

  return {
    title: {
      absolute: data.title, // This will overwrite any parent title
    },
    description: data.intro,
    openGraph: {
      images: [data.imageUrl], // Only use this page's image
      title: data.title,
      description: data.intro,
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getArticleData(params.id);
  return <ArticleClientComponent initialData={data} />;
}