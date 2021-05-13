# React Native 삽질용 저장소

처음 React Native를 접하면서 시도한 것들과 느낀 것들입니다.

## 메모

기본 템플릿만 가지고는 시작할 때에 설정해주어야 할 것들이 너무 많아서(어휴) 새 프로젝트 만들 때 안 까먹으려고 써놓습니다.

### 처음부터 Typescript와 함께하려면...

1. Typescript와 함께 하고 싶다면 `--template typescript`를 붙이면 된대서
2. WebStorm으로 프로젝트 만들 때에 `npx --package react-native-cli react-native --template typescript init rnpractice` 했는데
3. `tsconfig.ts` 생성 안됨! (실망)

### 다 만들어진 프로젝트에 Typescript 붙이기

1. `npm install --save-dev typescript @types/react @types/react-native` 실행.
2. `tsconfig.json` 만들어서 잘 채우기.
3. JSON을 읽고 싶다면 `"resolveJsonModule": true`를 `compilerOptions`에 추가하기.

### Jest 돌아가게 만들기

1. 테스트 돌리니까 `renderer.create(<App />);`
   부분에서 `type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.`
   라며 뻗음.
2. 알고보니 jest 설정 문제였음.
3. `package.json`의 jest 설정 부분을 아래와 같이 바꾸면 됨.

```
  "jest": {
    "preset": "react-native",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ]
  }
```

> 고마워요 스택오버플로! (https://stackoverflow.com/questions/61473512/why-is-my-jest-test-failing-in-react-native-with-typescript)

### 안드로이드에 배포하기

1. SDK 경로를 그냥 찾아주는게 아니기 때문에 환경변수를 통해 전달해 주어야 함.
2. `ANDROID_HOME`과(실행을 위해) 적절한 `PATH`를(왜인지는 모르겠지만 커맨드라인에서 도움 될 것 같아서) 설정해 주면 됨.
3. `ANDROID_HOME`을
   빼먹었다가는 `SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/Users/potados/WebstormProjects/rnpractice/android/local.properties'.`
   같은 무시무시한 에러를 보게 될 것임.

### (심화) WebStrom에서 안드로이드에 배포하기

1. WebStorm의 run configuration 중에 `react-native run-android`를 조금 있어보이게(?) 실행해주는 configuration이 있다.
2. 근데 해당 명령 전후에 다른 명령을 붙이는게 좀 까다로워서
3. `npm run android`처럼 쓸 수 있게 만들어 놓은 `android` 스크립트를 쓰기로 했다.
4. 해당 `android` 스크립트는 본 명령 실행 전에 환경변수 export하는 파일(`platformsetup/android.sh)을 source한다.

### 안 쓰는 설정 파일 제거

1. `.editorconfig`: 해당없음
2. `.gitattributes`: 윈도 안써서 무관
3. `.watchmanconfig`: 텅텅 비어서 무쓸모

### iOS 에서 실행하기

1. 괴랄한 빌드 에러 마주함(https://velog.io/@maliethy/react-native-ios-compile-error).
2. `Podfile`에서 `use_flipper!()` 줄을 주석처리함.
3. 잘 됨.

### Ionicons 사용하기

1. 여러 아이콘들을 쓰고 싶다면
2. `npm i react-native-vector-icons`
3. `npm i --save-dev @types/react-native-vector-icons`

### iOS에서 Ionicons 사용하기

1. `ios/rnpractice/Info.plist` 열고
2. 아래 엔트리 추가.

```
<key>UIAppFonts</key>
    <array>
      <string>AntDesign.ttf</string>
      <string>Entypo.ttf</string>
      <string>EvilIcons.ttf</string>
      <string>Feather.ttf</string>
      <string>FontAwesome.ttf</string>
      <string>FontAwesome5_Brands.ttf</string>
      <string>FontAwesome5_Regular.ttf</string>
      <string>FontAwesome5_Solid.ttf</string>
      <string>Foundation.ttf</string>
      <string>Ionicons.ttf</string>
      <string>MaterialIcons.ttf</string>
      <string>MaterialCommunityIcons.ttf</string>
      <string>SimpleLineIcons.ttf</string>
      <string>Octicons.ttf</string>
      <string>Zocial.ttf</string>
    </array>
```

### Android에서 Ionicons 사용하기

1. 여기도 마찬가지로 폰트 사용 설정이 필요하다.
2. `android/app/build.gradle` 맨 위에
3. `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"` 추가.

### iOS XCode로 빌드하기

1. 다 잘 되는가 싶더니
2. 마지막 `node /Users/potados/WebstormProjects/rnpractice/node_modules/react-native/cli.js bundle --entry-file index.js --platform ios --dev true --reset-cache --bundle-output /Users/potados/Library/Developer/Xcode/DerivedData/rnpractice-adztxvlqidodmufbmwbaeljccwkb/Build/Products/Debug-iphoneos/main.jsbundle --assets-dest /Users/potados/Library/Developer/Xcode/DerivedData/rnpractice-adztxvlqidodmufbmwbaeljccwkb/Build/Products/Debug-iphoneos/rnpractice.app`에서 터진다.
3. `--entry-file index.js` 이게 문제다. 나는 `index.ts`를 쓸건데 저 친구는 `index`면 무조건 `js`인 줄 안다.
4. 그냥 `index.js`로 바꿨다.

### 네비게이션, 네이티브냐 페이크냐

1. React Native를 한다면 네비게이션에서 [지옥을 맛보게 된다](https://jsdev.kr/t/react-native-1-navigation/2617) (하..)
2. 네이티브 네비게이션은 라이브러리상으로 조작할 수 있는 범위가 작다는 것 빼고는 단점이 없다.
3. 페이크(뭐라 불러야 할 지 몰라서 ㅠ) 네비게이션은 UI를 그냥 다 자바스크립트로 그리는 방법인데, 라이브러리 단에서 커스터마이징이 잘 된다.
4. 네이티브를 사용하면 각 OS의 잘 다듬어진 UI에 의한 사용자 경험을 보존할 수 있고, OS 업데이트에 따라 자동으로 최신 UI가 반영되는 매우 큰 장점이 있다.
5. 구치만 그냥 자바스크립트로 '재현'한 네비게이션도 나쁘지 않은 것 같다. 
6. OS별 네이티브 네비게이션 동작(인스타그램처럼.. 인스타는 정말 네이티브인 줄 알았다)은 포기하고, `react-navigation`이 제공하는 '페이크' 네비게이션을 쓰기로 했다.
7. 많은 앱들도 같은 길을 가고 있는 것 같다 (안-심).

### Redux? Flux?

1. https://www.reddit.com/r/iOSProgramming/comments/8yba8r/should_i_go_with_redux_pattern_instead_of_mvvm_or/
2. https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21
3. https://www.clariontech.com/blog/mvc-vs-flux-vs-redux-the-real-differences
4. https://www.evozon.com/blog/mvvm-to-flux-back-again-6
5. https://jongmin92.github.io/2017/02/12/ReactNative/redux-for-starter/
6. 함 해보자!

### FlexBox

1. https://www.imaginarycloud.com/blog/react-native-redux/ 이거 따라하다가
2. 레이아웃 감이 안와서
3. https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container 이거 보고
4. 도움 많이 받았다.

### Redux 설치하고 쓰기

1. `npm i redux react-redux`
2. `npm i -D @types/react-redux`
3. `npm i @reduxjs/toolkit`
4. `npm install @react-native-async-storage/async-storage`
5. `npm install redux-persist`

### Typescript와 Redux

1. 이 글 아주 도움됨: https://react-redux.js.org/using-react-redux/usage-with-typescript
2. `connect`에 인자로 넘겨줄 `mapStateToProps`의 인자에 state 타입을 명시해 주어야 `ConnectedProps`가 동작함.

### Redux toolkit

1. `createAction`, `createReducer`, `configureStore` 아주 도움됨.
2. https://www.imaginarycloud.com/blog/react-native-redux/ 여기 아주 좋은 예시!

### Back button 화살표

1. 안드로이드는 arrow back, iOS는 chevron이 기본이다.
2. 그런데 많은 앱들이 안드로이드와 같이 arrow back을 차용한다.
3. 나도 그러기로 했다.
4. **모서리가 둥근** arrow back은 `react-native-vector-icons/Feather`에서 `arrow-left`라는 이름으로 찾을 수 있었다.

### 다크모드 지원하려면

1. 무려 `react-navigation`이 `NavigationContainer`에서 `theme`속성으로 테마 설정을 지원한다!
2. 자세한건 여기: https://reactnavigation.org/docs/themes/

### 카드 뷰

1. 기본으로 없다.
~~2. https://www.npmjs.com/package/react-native-cardview 쓴다.~~
~~3. `npm install react-native-cardview --save`~~
~~4. 이래저래 귀찮은 작업들 `MainApplication`과 `build.gradle`에서 처리해준다.~~

2. 직접 만들었다.
3. 카드뷰 그림자와 클릭 이펙트 하......
4. iOS는 css 속성만으로 그림자가 나오지만 안드로이드에서는 아니다.
5. 안드로이드에서는 elevation을 사용한다.
6. 그런데 TouchableOpacity는 elevation과 함께 쓸 때에 시각적 버그를 유발한다(그림자가 정말 이상해짐).
7. 그래서 안드로이드에서는 TouchableNativeFeedback를, iOS에서는 TouchableOpacity를 쓰기로 한다.
8. 다만 TouchableNativeFeedback가 border radius가 있는 뷰의 끄트머리를 반영하지 못하는 문제가 있었으나 해결.
9. https://github.com/facebook/react-native/issues/6480 여기 자세히 나와있음.

### MobX가 나은 것 같아요..나한테는...

1. https://woowabros.github.io/experience/2019/01/02/kimcj-react-mobx.html
2. Redux 너무 방탕해...
3. 자자 Reudx 버리고 MobX로 갑시다 ㅎㅎ
4. `npm i mobx`
5. `npm i mobx-react`
6. `npm i core-decorators`
7. `tsconfig.json`에서 `experimentalDecorators`와 `useDefineForClassFields` `true`로.
8. 왜인지는 모르겠지만 `npm i -D @babel/plugin-proposal-decorators` 후 `babel.config.js`에 플러그인 넣어주어야 함..
9. 아니 망할 [여기 설명](https://mobx.js.org/enabling-decorators.html#babel-7)대로 해도 렌더링 바로 안되는 문제 여전..

### MobX 업데이트가 안되네????

1. 하루 통째로 갈아넣은 끝에
2. RN도 라이프사이클이 다~ 있고
3. 초기 한번 액션 실행은 `render` 아니고 `componentDidMount`에서 해야 한다는 것 발견... 안그러면 업데이트 안됨.. ㅎㅎ
4. 후...
5. **가 아니고**
6. 구독 대상 자체에 대입을 해버려서 문제가 생긴듯...
7. 다른 예제 코드(https://woowabros.github.io/experience/2019/01/02/kimcj-react-mobx.html) 라이브데이터마냥 감싸는 부분이 안보여서 그냥 썼는데 잘못된 시도였다.
8. 그 사이에 버전이 얼마나 바뀐거야..ㅠㅠ

### MobX 데코레이터 멈춰!

1. 아니 저 데코레이터 대신에 생성자에 `makeAutoObservable(this)` 써주니 모든 것이 예상한 대로 돌아간다..ㅂㄷㅂㄷ
2. 도움 많이 받은 글: https://michel.codes/blogs/mobx6
3. 데코레이터 쓴다고 난리친거 다 되돌릴거다..ㅂㄷㅂㄷ
4. 스토어에서 데코레이터 빼고, 컴포넌트에는 놔뒀다.

### Carousel 가즈아ㅏㅏㅏ

1. 라이브러리가 제맛이지
2. `npm install --save react-native-snap-carousel`
3. `npm install --save @types/react-native-snap-carousel`
4. 안드로이드에서는 JS Dev 켜면 맛탱이가 간대서 끄고 돌리려는데 `'decorators-legacy' isn't currently enabled` 에러 부활...
5. `npm install --save-dev @babel/plugin-proposal-decorators` 다시 간다
6. 라이브러리 때려치고(잘 작동도 안함;) [이거](https://rossbulat.medium.com/react-native-carousels-with-horizontal-scroll-views-60b0587a670c)로 간다!!
7. 한참 삽질하다가(하...)
8. iOS에서만 리스트 양끝 패딩이 달리 적용되는거 보고 한숨쉬다가
9. 이 글 보고 원인 찾음: https://medium.com/nerd-for-tech/react-native-create-a-horizontal-snap-scrollview-e1d01ac3ba09
10. android에서는 `paddingHorizontal`을 스타일에 써주면 되고, ios에서는 `contentInset`과 `contentOffset`이 필요했다...
11. 휴

### 안드로이드 릴리즈 빌드가 안된다..?

1. `assembleDebug`는 되는데 `assembleRelease`는 터진다.
2. 원인은 리소스 중복이라고 한다.
3. [여기](https://stackoverflow.com/a/57975287/11929317)서 답을 찾았다.
4. 그냥 리소스 폴더 삭제해버리면(!) 해결.
5. `rm -rf ./android/app/src/main/res/drawable-*`
6. `rm -rf ./android/app/src/main/res/raw`

### 상단 탭 바와 페이징

1. 안드로이드의 TabLayout + ViewPager 같은 것!
2. `npm install @react-navigation/material-top-tabs react-native-tab-view@^2.16.0`

### Reanimated2?

1. Warning이 자꾸 떠서 보니, `reanimated2`를 설치하란다.
2. `npm i react-native-reanimated@next`
3. Babel 플러그인에 `'react-native-reanimated/plugin'` 추가.
4. 그리고 [얘](https://docs.swmansion.com/react-native-reanimated/docs/installation)가 하란대로 다 해준다.
5. ~~잘 안 따라하면 문제 생긴다. 에러가 뜨면 잘 따라했는지부터 보자!~~

### 스크롤할 때에 헤더 올리기

1. 결론: 안돼. 포기해.
2. 문제1: scrollY 기반으로 translateY 설정하는 방법에는 iOS에서 bounce를 처리하기 힘들다는 치명적 단점이 있음.
3. 문제2: 위 문제를 해결해도 StakNavigation과 MaterialTopTabNavigation을 함께 사용하기 쉽지 않음.
4. 문제3: 이걸 react-navigation이 공식 지원할 생각이 없어 보임.

## 오늘의 교훈

### 2021.5.4

- `ios`나 `android` 디렉토리 날리면 큰일나겠다 싶다.
- 아니 이럴거면 어차피 iOS나 Android나 네이티브 할 줄 알아야 하는건가....ㅠ
- 기본 컴포넌트를 직접 가져다 쓰기보다는 최소한의 코드로만 사용할 수 있는 wrapper 컴포넌트를 만들어 쓰고 있다.
- Best practice를 봐야 할 것 같다. 코드가 각이 잡혀있다기보다는 뭔가 다 흐물흐물해 보여서 좀 그렇다.... 아직 이해가 덜 됐기도 하구,,

### 2021.5.5

- 아니무슨 네비게이션 하나 하는데 선택지가 이렇게 많아!
- 인스타나 페이스북은 자기네들이 쓰는 라이브러리는 절대 안 푼다...ㅂㄷㅂㄷ

### 2021.5.6

- 레이아웃 안드로이드로만 하다가 FlexBox 접하니까 어지럽다,,
- 단방향 데이터 전달 신선하다. 속에서 무슨 일이 일어나는지는 모르겠지만 일단 덮어두고 있는 중...
- 어떻게 괜찮은 카드뷰 라이브러리가 하나도 없어...ㅠㅠ

### 2021.5.7

- 이게 맞는건가 싶다... 휴
- RN을 잘 몰라서 저지르는 실수들이 점점 많아진다. 글 좀 읽어야겠다 이제..
- 제대로 된 레퍼런스를 찾고 싶은데 이쪽 바닥이 너무 코드 자유도가 높아서..허허 맘에드는 형식 레퍼런스가 있을까....

### 2021.5.8

- 간단한 carousel 하나 예제 수준으로 만드느라 하루 다 갔다. 
- 오늘도 그냥 때려치고 네이티브로 넘어가서 빨리 iOS 배울까 고민의 늪에 빠졌었다.
- 간신히 극복했다. 나머지는 내일 해야지 하...

### 2021.5.9

- 정말이지 손이 많이 가는 친구다...ㅎㅎㅎㅎㅎ

### 2021.5.10

- 네이티브 코드 더하다 보니 프로젝트가 갈수록 너덜너덜해지는 것 같다...;

### 2021.5.11

- 라이프사이클도 알아가는 중...

### 2021.5.12

- 왜 이 곳에는 그 흔한 CollapsingToolbar도 없는것인가....ㅠㅠㅠㅠ
- 정말 개고생하다가 포기해버렸다 ㅎㅎㅎㅎㅎㅎ 그냥 넘어가자 ㅎㅎ
