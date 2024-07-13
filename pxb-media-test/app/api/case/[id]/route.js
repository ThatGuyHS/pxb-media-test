import { NextResponse } from 'next/server';

const dataCases = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'NAME NAME',
    date: 'DD/MM/YYYY',
    categories: ['Sports', 'Rocket League', 'Casters', 'Events', 'Case Study'],
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.',
    imageUrl: '/tf.connect-11.jpg',
    secondaryImageUrl: '/tf.connect-11.jpg',
    imageCredit: 'Photographer Name',
    paragraphs: [
      'Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...',
      'Proin pretium iaculis eros, interdum pretium diam...'
    ]
  },
  {
    id: '2',
    title: 'Aliquam ut dui nec nunc volutpat tristique.',
    author: 'NAME NAME',
    date: 'DD/MM/YYYY',
    categories: ['Technology', 'Innovation', 'Case Study'],
    intro: 'Aliquam ut dui nec nunc volutpat tristique. Morbi sit amet purus feugiat, pharetra arcu et, tincidunt lacus.',
    imageUrl: '/tf.connect-12.jpg',
    secondaryImageUrl: '/tf.connect-12.jpg',
    imageCredit: 'Photographer Name',
    paragraphs: [
      'Sed vulputate massa eget erat sagittis, vitae sodales sapien condimentum...',
      'Sed vulputate massa eget erat sagittis, vitae sodales sapien condimentum...',
      'Sed vulputate massa eget erat sagittis, vitae sodales sapien condimentum...',
      'Sed vulputate massa eget erat sagittis, vitae sodales sapien condimentum...',
      'Sed vulputate massa eget erat sagittis, vitae sodales sapien condimentum...'
    ]
  },
  {
    id: '3',
    title: 'Vestibulum ante ipsum primis in faucibus orci luctus et.',
    author: 'NAME NAME',
    date: 'DD/MM/YYYY',
    categories: ['Health', 'Wellness', 'Case Study'],
    intro: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    imageUrl: '/tf.connect-13.jpg',
    secondaryImageUrl: '/tf.connect-13.jpg',
    imageCredit: 'Photographer Name',
    paragraphs: [
      'Phasellus fringilla orci eu lacus suscipit, nec molestie nisl fringilla...',
      'Phasellus fringilla orci eu lacus suscipit, nec molestie nisl fringilla...',
      'Phasellus fringilla orci eu lacus suscipit, nec molestie nisl fringilla...',
      'Phasellus fringilla orci eu lacus suscipit, nec molestie nisl fringilla...'
    ]
  },
  {
    id: '4',
    title: 'Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus.',
    author: 'NAME NAME',
    date: 'DD/MM/YYYY',
    categories: ['Travel', 'Adventure', 'Case Study'],
    intro: 'Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imageUrl: '/tf.connect-14.jpg',
    secondaryImageUrl: '/tf.connect-14.jpg',
    imageCredit: 'Photographer Name',
    paragraphs: [
      'Quisque a urna a quam interdum efficitur. Nullam tristique sapien in libero facilisis, a volutpat massa malesuada...',
      'Quisque a urna a quam interdum efficitur. Nullam tristique sapien in libero facilisis, a volutpat massa malesuada...',
      'Quisque a urna a quam interdum efficitur. Nullam tristique sapien in libero facilisis, a volutpat massa malesuada...'
    ]
  },
  {
    id: '5',
    title: 'Duis nec sapien at libero dignissim hendrerit.',
    author: 'NAME NAME',
    date: 'DD/MM/YYYY',
    categories: ['Business', 'Finance', 'Case Study'],
    intro: 'Duis nec sapien at libero dignissim hendrerit. Sed sit amet malesuada ipsum.',
    imageUrl: '/tf.connect-15.jpg',
    secondaryImageUrl: '/tf.connect-15.jpg',
    imageCredit: 'Photographer Name',
    paragraphs: [
      'Fusce non mi sit amet magna faucibus auctor non nec turpis...',
      'Fusce non mi sit amet magna faucibus auctor non nec turpis...',
      'Fusce non mi sit amet magna faucibus auctor non nec turpis...',
      'Fusce non mi sit amet magna faucibus auctor non nec turpis...'
    ]
  },
  {
    id: '6',
    title: 'Praesent ut magna at tortor egestas elementum.',
    author: 'NAME NAME',
    date: 'DD/MM/YYYY',
    categories: ['Education', 'Learning', 'Case Study'],
    intro: 'Praesent ut magna at tortor egestas elementum. Nulla facilisi.',
    imageUrl: '/tf.connect-16.jpg',
    secondaryImageUrl: '/tf.connect-16.jpg',
    imageCredit: 'Photographer Name',
    paragraphs: [
      'Curabitur aliquet quam id dui posuere blandit...',
      'Curabitur aliquet quam id dui posuere blandit...',
      'Curabitur aliquet quam id dui posuere blandit...',
      'Curabitur aliquet quam id dui posuere blandit...'
    ]
  }
];

export async function GET(req, { params }) {
  const { id } = params;

  const data = dataCases.find(item => item.id === id);

  if (!data) {
    return NextResponse.json({ error: 'Data not found' }, { status: 404 });
  }

  return NextResponse.json(data);
}
