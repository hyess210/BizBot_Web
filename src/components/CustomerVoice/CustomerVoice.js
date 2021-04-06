import React from "react";
import "./CustomerVoice.scss";

const CustomerVoice = () => {
  const CustomerBox = ({ logo, content, coporation, name, position }) => {
    return (
      <div className='CustomerVoice__content-box'>
        <img src={logo} alt={logo} className='CustomerVoice__content-box-img' />
        <div className='CustomerVoice__content-box-title'>{coporation}</div>
        <div className='CustomerVoice__content-box-content'>"{content}"</div>
        <div className='CustomerVoice__content-box-position'>
          {name}
          <br />
          {position}
        </div>
      </div>
    );
  };
  return (
    <div className='CustomerVoice'>
      <div className='CustomerVoice__title'>
        <div className='CustomerVoice__title-title'>고객의 목소리</div>
        <div className='CustomerVoice__title-des'>
          중소기업부터 소상공인까지 많은 기업들이 비즈봇을 사용하고 있습니다.
        </div>
      </div>
      <div className='CustomerVoice__content'>
        <CustomerBox
          logo=''
          content='비즈봇을 통해 데이터 기반 스타트업 육성사업에 선정되어 좋은 사람들을 많이 뽑을 수 있었던 것 같아요.'
          coporation='이룩크리에이티브'
          name='김은지'
          position='이룩크리에이티브 실장'
        />
        <CustomerBox
          logo=''
          content='비즈봇을 통해 데이터 기반 스타트업 육성사업에 선정되어 좋은 사람들을 많이 뽑을 수 있었던 것 같아요.'
          coporation='이룩크리에이티브'
          name='김은지'
          position='이룩크리에이티브 실장'
        />
        <div className='CustomerVoice__content-customer'>
          <div className='CustomerVoice__content-customer-des'>
            <span style={{color:'blue'}}>비즈봇</span>은 <span style={{fontWeight:'500'}}>카톡만 할 수 있으면 언제 어디서나</span> 볼 수 있으니까...
            한 마디로 '비즈봇'은 희망입니다.
          </div>
          <div className='CustomerVoice__content-customer-name'>
            송준복 대표
            <br />
            인터뷰 영상보기(4:34)
          </div>
          <div className='CustomerVoice__content-customer-video'>
            <iframe
              width='550'
              height='300'
              style={{border:'none'}}
              src='https://www.youtube.com/embed/R7P4FNCfFDA'
            ></iframe>
          </div>
        </div>
        <CustomerBox
          logo=''
          content='비즈봇을 통해 데이터 기반 스타트업 육성사업에 선정되어 좋은 사람들을 많이 뽑을 수 있었던 것 같아요.'
          coporation='이룩크리에이티브'
          name='김은지'
          position='이룩크리에이티브 실장'
        />
        <div></div>
        <CustomerBox
          logo=''
          content='비즈봇을 통해 데이터 기반 스타트업 육성사업에 선정되어 좋은 사람들을 많이 뽑을 수 있었던 것 같아요.'
          coporation='이룩크리에이티브'
          name='김은지'
          position='이룩크리에이티브 실장'
        />
      </div>
    </div>
  );
};

export default CustomerVoice;
