import Layout from './components/Layout';
import Bar from './components/Bar';

const About = () => (
  <Layout>
    <Bar text="ABOUT" />
    <body className="body">
      <h1>간단한 프로젝트 소개</h1>
      <div className="frame">
        <h3>기술 상세</h3>
        <div className="intro">
          <p>
            안녕하세요! about페이지 입니다.
            <br />
            이 페이지는 COMMON-GROUND 클론 페이지 입니다. <br />
            Next.js를 사용하여 제작하였습니다. <br />
            reactBootStrap을 활용하여 각 기능들을 쉽게 구현하였습니다. <br />
            css는 함수와 jsx style을 사용하였습니다. <br />
            db.json 페이지는 9000 port를 사용합니다. <br />
            axios 함수를 이용하여 db.json파일을 받아옵니다.
            <br />
            커먼 그라운드 홈페이지는{' '}
            <a href="https://www.common-ground.co.kr/eat"> 이곳 </a>을
            클릭하세요
          </p>
        </div>
        <h3>PAGE 소개</h3>
        <div className="pages">
          <h4>about 페이지</h4>
          <p>
            페이지 소개 페이지 입니다.
            <br /> 기술상세와 페이지 정보를 볼수 있습니다.
          </p>
          <h4>STORE 페이지</h4>
          <p>
            메뉴에 보이는 STORE를 클릭하면 가게 정보를 볼수 있습니다
            <br />
            STORE에서 등장하는 가게들을 클릭하면 상세정보창이 등장합니다
            <br />
            상세정보창에서는 사진 및 가게 이름, 가게 정보 , 가게 홈페이지에 대해
            나와 있습니다.
            <br />
            <h4>Play, Shop 페이지</h4>
            <p>
              아직 구축중입니다. 잘못된 페이지로 store페이지로 5초뒤 이동합니다.
            </p>
          </p>
        </div>
      </div>
    </body>
  </Layout>
);

export default About;
