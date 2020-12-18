import Image from 'next/image';

const Social = () => {
  return (
    <div className='social'>
      <div className='social-title'>
        <h4 className='text-center'>FOLGEN SIE DPA AUF</h4>
      </div>
      <div className='row'>
        <div className='col-xs-3 social-icon'>
          <Image
            src='/facebook-icon.png'
            alt='facebook'
            width={50}
            height={50}
          />
        </div>
        <div className='col-xs-3 social-icon'>
          <Image
            src='/instagram-icon.png'
            alt='instagram'
            width={50}
            height={50}
          />
        </div>
        <div className='col-xs-3 social-icon'>
          <Image src='/twitter-icon.png' alt='twitter' width={50} height={50} />
        </div>
        <div className='col-xs-3 social-icon'>
          <Image
            src='/painterest-icon.png'
            alt='painterest '
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
