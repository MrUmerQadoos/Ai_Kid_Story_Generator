import React from 'react';
import Image from 'next/image';

interface BookCoverPageProps {
  imageUrl: string;
}

const BookCoverPage = ({ imageUrl }: BookCoverPageProps) => {
  return (
    <div>
      <Image src={imageUrl} alt="Cover" width={500} height={500} />
    </div>
  );
};

export default BookCoverPage;
