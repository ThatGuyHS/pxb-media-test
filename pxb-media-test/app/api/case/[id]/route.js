import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;

  // Simulated data fetching logic
  const data = {
    id,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'NAME NAME',
    date: 'DD/MM/YYYY',
    categories: ['Sports', 'Rocket League', 'Casters', 'Events', 'Case Study'],
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.',
    imageUrl: '/tf.connect-11.jpg',
    secondaryImageUrl: '/tf.connect-11.jpg',
    imageCredit: 'Photographer Name',
    paragraphs: [
      'Proin pretium iaculis eros, interdum pretium diam...   Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...   Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...   Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...   Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...   Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...   Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...   Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...   Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...   Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam... Proin pretium iaculis eros, interdum pretium diam...'
    ]
  };

  return NextResponse.json(data);
}
