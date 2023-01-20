<div align="center">
  <h1>
     🖼 메인 사전과제 - 배경화면 검색 엔진
  </h1>
  <strong>FastCampus 강의 - <a href="https://fastcampus.co.kr/dev_online_fefinal">30개 프로젝트로 배우는
프론트엔드 웹 개발 (with React)</a>를 위한 자료입니다.</strong>
</div>

## 📑 Get Started

### 1) 보일러 플레이트 코드 확인하기

사전 과제 작성을 위한 보일러 플레이트 코드는, 본 저장소의 `main` 브랜치에 업로드 되어 있습니다.

아래 단계를 통해 로컬에서 React App을 실행할 수 있습니다.

1. 본 저장소를 fork 하거나, ZIP 파일로 다운로드 받은 후
2. 아래 명령어로 의존성 라이브러리들을 설치해주세요.

```bash
npm install
# 또는
yarn install
```

3. 아래 명령어로 React 개발 서버를 띄울 수 있습니다.

```bash
npm start
# 또는
yarn start
```

### 2) 답안 코드 확인하기

답안 코드는 `answer` 브랜치에 업로드 되어 있습니다. 로컬에서 답안 코드를 확인하고 싶으시면 아래의 단계를 따라주세요.

1. 본 저장소를 fork 하거나, ZIP 파일로 다운로드 받은 후
2. 아래 명령어로 원격 answer 브랜치로 checkout 해주세요.

```bash
git checkout -t origin/answer
```

3. 아래 명령어로 의존성 라이브러리들을 설치해주세요. (main 브랜치에서 이미 설치했다면 재설치는 불필요합니다.)

```bash
npm install
# 또는
yarn install
```

4. 아래 명령어로 React 개발 서버를 띄울 수 있습니다.

```bash
npm start
# 또는
yarn start
```

#### pixabay API 연동을 위한 준비사항

본 과제는 이미지 검색을 위해 [pixabay](https://pixabay.com/) (저작권 무료 이미지 공유 페이지) 에서 제공하는 API를 사용하며, 해당 API 호출을 위해서는 회원가입 후 제공되는 **개인 API Key**가 필요합니다.

이에 아래 절차를 따라 pixabay API를 연동해주세요.

1. [pixabay](https://pixabay.com/ko/) 회원가입 후
2. 공식 api 문서 (https://pixabay.com/api/docs/)에서 **개인 key**와 API 스펙 확인 (서비스에서 사용하는 API 스펙은 본 저장소의 [wiki - API 설명](https://github.com/hanameee/wallpaper-search-engine/wiki/%08%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD#api-%EC%84%A4%EB%AA%85)참고)

![image](https://user-images.githubusercontent.com/25149664/162615022-fa72b28d-5834-484e-9f04-15fc03df4775.png)

3. 프로젝트 root에 `.env` 파일 생성 후 개인 API KEY 입력

> ⚠️ 환경변수의 키 값은 커스텀이 가능하지만, 반드시 "REACT_APP_" 으로 시작해야 합니다. 이는 create-react-app에서 강제하는 규칙이며, 자세한 내용은 https://create-react-app.dev/docs/adding-custom-environment-variables/ 를 참고해주세요.

<img src="https://user-images.githubusercontent.com/25149664/162615238-12740a6d-6eb8-4554-8862-c453a0a3bee1.png" width=720/>

4. API 호출 구현 시 개인 key를 ` process.env.REACT_APP_PIXABAY` 로 접근해 사용합니다.
5. `.gitignore`에 .env가 설정되어 있으므로, 소스코드를 github에 업로드 하더라도 .env 파일은 공개된 저장소에 업로드 되지 않습니다.

#### 개인 API key를 env로 관리하는 이유

pixabay API는 **무료**이고, 개인 API KEY가 공개된다고 해서 큰 문제가 되진 않습니다.

하지만 이렇게 개인 API KEY를 `.env`로 관리하는 이유는 개인의 API Key로는 1분에 100개까지의 request 전송이 가능한 Rate Limit (속도 제한)이 존재하기 때문입니다. 개인의 할당량을 보장받기 위해서는 API Key를 공개된 저장소에 배포/업로드 하지 않는 것을 권장합니다.

> ⚠️ 중요한 값은 (결제와 직결되는 AWS secret key 등) 프론트엔드 소스코드에 저장하지 말아야 합니다. 난독화를 거치거나 환경변수를 사용하더라도, React 소스코드를 빌드 후 배포하게 되면, network 창을 통해 / 또는 소스코드 분석을 통해 값을 탈취할 수 있는 위험성이 존재합니다. 

## ✅ 요구사항

본 저장소의 `wiki`에서 요구사항을 확인하실 수 있습니다.

-   [링크](https://github.com/hanameee/wallpaper-search-engine/wiki/%08%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD)

## 🖥 데모 페이지

![image](https://user-images.githubusercontent.com/25149664/162614798-52641301-f3e5-4c0c-a3e7-c43e94868e84.png)

[2.답안 코드 확인하기](https://github.com/hanameee/wallpaper-search-engine/tree/answer#2-%EB%8B%B5%EC%95%88-%EC%BD%94%EB%93%9C-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)에 명시한 것과 같이, 본 과제는 이미지 검색을 위해 [pixabay](https://pixabay.com/)에서 제공하는 API를 사용하며 pixabay API 사용을 위해서는 pixabay 회원가입 후 제공되는 **개인 API Key**가 필요합니다.

개인 API Key와 엮인 Rate Limit이 존재하므로, 개인 API Key가 노출되지 않도록 본 과제는 별도의 배포된 데모 페이지 없이 진행합니다.

따라서 데모 페이지는 강의 영상 또는 [2.답안 코드 확인하기](https://github.com/hanameee/wallpaper-search-engine/tree/answer#2-%EB%8B%B5%EC%95%88-%EC%BD%94%EB%93%9C-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)를 참고해 개인 로컬 개발 환경에서 직접 확인해주세요.

```
wallpaper-search-engine
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-1be675aebd414ee3f0661cac2ccc5fbd9913417e.idx
│  │     └─ pack-1be675aebd414ee3f0661cac2ccc5fbd9913417e.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.json
├─ .vscode
│  └─ settings.json
├─ package-lock.json
├─ package.json
├─ public
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  ├─ getWallPapers.js
│  │  └─ request.js
│  ├─ App.css
│  ├─ App.js
│  ├─ asset
│  │  ├─ dark.svg
│  │  ├─ delete.svg
│  │  ├─ dummyData.js
│  │  ├─ light.svg
│  │  ├─ like.svg
│  │  ├─ next.svg
│  │  ├─ prev.svg
│  │  ├─ save.svg
│  │  └─ search.svg
│  ├─ component
│  │  ├─ EmptyResult.js
│  │  ├─ Footer.js
│  │  ├─ Hero.js
│  │  ├─ ImageCard.js
│  │  ├─ ImageModal.js
│  │  ├─ Pagination.js
│  │  ├─ ResultContainer.js
│  │  ├─ Search.js
│  │  ├─ SearchOption.js
│  │  ├─ SearchTag.js
│  │  └─ ToggleThemeButton.js
│  ├─ index.css
│  ├─ index.js
│  └─ styles
│     └─ fonts
│        ├─ NotoSansKR-Black.otf
│        ├─ NotoSansKR-Bold.otf
│        ├─ NotoSansKR-Light.otf
│        ├─ NotoSansKR-Medium.otf
│        ├─ NotoSansKR-Regular.otf
│        └─ NotoSansKR-Thin.otf
└─ yarn.lock

```
```
wallpaper-search-engine
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-1be675aebd414ee3f0661cac2ccc5fbd9913417e.idx
│  │     └─ pack-1be675aebd414ee3f0661cac2ccc5fbd9913417e.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.json
├─ .vscode
│  └─ settings.json
├─ package-lock.json
├─ package.json
├─ public
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  ├─ getWallPapers.js
│  │  └─ request.js
│  ├─ App.css
│  ├─ App.js
│  ├─ asset
│  │  ├─ dark.svg
│  │  ├─ delete.svg
│  │  ├─ dummyData.js
│  │  ├─ light.svg
│  │  ├─ like.svg
│  │  ├─ next.svg
│  │  ├─ prev.svg
│  │  ├─ save.svg
│  │  └─ search.svg
│  ├─ component
│  │  ├─ EmptyResult.js
│  │  ├─ Footer.js
│  │  ├─ Hero.js
│  │  ├─ Image
│  │  │  ├─ ImageCard.js
│  │  │  ├─ ImageModal.js
│  │  │  └─ ResultContainer.js
│  │  ├─ Pagination.js
│  │  ├─ Search
│  │  │  ├─ Search.js
│  │  │  ├─ SearchOption.js
│  │  │  └─ SearchTag.js
│  │  ├─ Title.js
│  │  └─ ToggleThemeButton.js
│  ├─ index.css
│  ├─ index.js
│  └─ styles
│     └─ fonts
│        ├─ NotoSansKR-Black.otf
│        ├─ NotoSansKR-Bold.otf
│        ├─ NotoSansKR-Light.otf
│        ├─ NotoSansKR-Medium.otf
│        ├─ NotoSansKR-Regular.otf
│        └─ NotoSansKR-Thin.otf
├─ tsconfig.json
└─ yarn.lock

```