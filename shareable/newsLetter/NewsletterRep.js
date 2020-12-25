const NewsletterRep = ({ padding }) => {
  return (
    <>
      <div className='newsLetter__container' >
        <div className='newsLetter__container__header'>
          <h2 className='newsLetter__container__header--title'>Newsletter</h2>
          <p className='newsLetter__container__header--info'>
            Abonnieren sie unseren newsletter und erhalten sie exklusive
            neuigkeiten zu unseren neuen artikeln und werbeaktionen!
          </p>
        </div>
        <div className='newsLetter__container__action'>
          <form action='#' className='newsLetter__container__action__form'>
            <input
              type='email'
              placeholder={'Email adresse'}
              className='newsLetter__container__action__form--email'
            />
            {/*<div className={"newsLetter__container__action__form--sbmt"}>*/}
            {/*  <input*/}
            {/*      type='submit'*/}
            {/*      className='newsLetter__container__action__form--submit'*/}
            {/*      value={'Senden'}*/}
            {/*  />*/}
            {/*</div>*/}

              <input
                  type='submit'
                  className='newsLetter__container__action__form--submit'
                  value={'Senden'}
              />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsletterRep;
