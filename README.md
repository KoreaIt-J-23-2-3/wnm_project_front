<img src="https://capsule-render.vercel.app/api?type=waving&color=BDBDC8&height=120&text=WoofnMewo&section=header" />

## **📗 목차**

🏆 [프로젝트 소개](#-프로젝트-소개)

👨🏻‍💻 [팀원 소개](#-팀원-소개)

🛠 [개발 도구](#-개발-도구)

⏰ [프로젝트 일정](#-프로젝트-일정)

🔗 [API명세서와 ERD설계도](#-API명세서와-ERD설계도)
  
📝 [메뉴구조도](#-메뉴구조도)
  
💻 [화면 구현 및 주요 기능 코드 리뷰](#-화면-구현-및-주요-기능-코드-리뷰)
  - [Oauth2 회원가입 및 로그인 페이지](#Oauth2-회원가입-및-로그인-페이지)
  - [상품 페이지](#상품-페이지)
  - [장바구니 페이지](#장바구니-페이지)
  - [구매 페이지](#구매-페이지)
  - [리뷰 페이지](#리뷰-페이지)
  - [관리자용 회원 주문 내역 관리 페이지](#관리자용-회원-주문-내역-관리-페이지)
  - [관리자용 상품 관리 페이지](#관리자용-회원-상품-관리)
  - [공지사항 페이지](#공지사항-페이지)
  
✍ [느낀점](#-느낀점)

<br/>

## **🏆 프로젝트 소개** [[Notion]](https://marbled-teeth-f44.notion.site/Woof-Meow-Team-Project-5dff0bf505a144dfbb29f9942d010560)

- 프로젝트 제목
  - 온라인 반려견 & 반려묘 쇼핑몰 "Woof&Meow" 웹 개발

- 프로젝트 목적
  - 학습한 내용 복습 및 활용, 팀원들과의 협업에 대한 이해

- 분류
  - 팀 프로젝트

- 제작 기간
  - 2023.11.01 ~ 2023.11.28

- 주요기능
  - 회원가입 및 Oauth2 로그인 기능
  - 카테고리 별 상품 검색 기능
  - 간편 결제(Kakao / Toss) 기능
  - 장바구니 기능
  - 리뷰 기능
  - 관리자용 회원 주문 내역 관리 및 배송 상태 변경 기능
  - 관리자용 상품 관리 및 입/출고 기능
  - 공지사항 기능 
  
<p align="right"><a href="#top">TOP 🔼</a></p>
<br/>

## **👨🏻‍💻 팀원 소개**

<br/>

> **팀장: 정대풍** 
### Back-End
- 회원정보 RUD 기능 구현 
- 장바구니 CRD 기능 구현
- 결제 기능 구현
- 회원용 구매 확정 기능 구현 
  
### Front-End
- 회원용 주문 내역조회 페이지 구현
- 장바구니 페이지 구현
- 결제 페이지 구현
  
### etc.
- PPT 제작 및 발표

<br/>

> **팀원: 장호진** 
### Back-End
- Security JWT 및 accessToken 구현
- 공지사항 CRUD 기능 구현
- 카테고리 기능 구현

### Front-End
- 상품 페이지 구현
- 공지사항 페이지 구현
- 페이지네이션 기능 구현
  
### etc.
- 회의록 작성

<br/>

> **팀원: 이동헌** 
### BackEnd
- 상품 R 기능 구현 
- 관리자용 상품 CRUD 기능 구현
- 관리자용 회원 주문 내역조회 기능 구현
- 관지자용 배송 상태 변경 기능 구현
- 입/출고 CUR 기능 구현
- 회원용 주문 내역조회 기능 구현
  
### FrontEnd
- 관리자용 회원 주문 내역 관리 페이지 구현
- 관리자용 상품 관리 페이지 구현

### etc.
- API 명세서 관리
- ERD 명세서 관리

<br/>

> **팀원: 임예림** 
### Back-End
- 리뷰 CRUD 기능 구현
  
### Front-End
- 회원가입 페이지 구현
- 간편로그인 페이지 구현
- 회원 수정 페이지 구현
- 리뷰 페이지 구현
  
### etc.
- 회의록 작성

  <br/>

> **공동작업**
### etc.
- API 명세서 작성
- DB 설계

<p align="right"><a href="#top">TOP 🔼</a></p>
<br/>

## **🛠 개발 도구**

<br/>

### Back-End & DataBase
<div>
	<img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white">
	<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
	
</div>
<div>
	<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
	<img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">
	<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
</div>

### Front-End
<div>
	<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
	<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
	<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
	<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
</div>


### SCM(형상관리)
<div>
	<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
	<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>


### DePloyment
<div>
	<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> 
	<img src="https://img.shields.io/badge/Amazon_S3-446a29?style=for-the-badge&logo=amazons3&logoColor=white"> 
	<img src="https://img.shields.io/badge/Amazon_EC2-ab6d10?style=for-the-badge&logo=amazonec2&logoColor=white">
</div>


### Libray
<div>
	<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"> 
	<img src="https://img.shields.io/badge/MyBatis-271e1f.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVR4nO3US4hPcRQH8H9RI+Wx8FohkVfkUdQkC5FXxs6WhZSysSBCTWyRZpryWDHZi7LxSGRBKUtKMmGiRB6ZIvPRqbP4u917/zP/maXv6t77u+f7Ped8z/k1GiMANuI29mJuY7yBM/7F2bGQLcR2TMR8rMVsHMJd/MSftirBKgwrx03Mwv1839BuBdHnAfzCezzH1yR9gjv53IdH+IR3uIWudkXn4G0Sf8GQapxuV2QLvmENJqRXXTiGG0k+lAmsrCLpRTc2Y2rJ+YqKuGhVYFmrLPubSh1ODx7jepSOzoq4+E8mNg+TyxKMH1fnCNahP1pUiNuKF2n2ASzBDxwuE7moNQ5iJqZVVLQYr7G+7HA6XrYQuIxd+I2HOIUdafyUaA/WFSttFlmEjzUCx7G/5rynzuiOVI9snpYED2R77tUI7C4jjrKOYjAn6Fx+25bP13ACM3L2qxDxHc3Em3A1l6iID7iAPblo0ZYH6nGkmPl544dncQuXtWcfvo+RfBALWl1ol3L0RotXWF5JXhBamstW5kkRkcyV2J0RkReEJmFnehTGvsHnvLZjuU7GKI+a+D8aBfwFL0hrRFV1ciwAAAAASUVORK5CYII=&logoColor=white">
  <img src="https://img.shields.io/badge/Lombok-ca0124?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nO2aW4hVVRjHP01HzZJGJcpuU6l00Uqzgl4sCrqgDz5IZZjZQxlEaKBJWVA9pEEG3QkqESrtAqWhY+WDQZBpF2ys1DLz0s3spqU2Nr/42GvR19eZaVpzBtaZs39wmLPP3vs/a+219ndbS6SkpKSkpKSk1gEOA14H/gBukXoDmMHfvCf1BHAU8L15AHOlngAeNJ3/Augv9QIwAjhoHsAkqSeAl03nV0tPAjgDuBt4E9gItAAXm/NnAW2h8/r3HOkJAKcElxY7Z1lmrnvE/L5cegLAJGAflTkE3GCu3WnOfQyMlFoGmBw6GWkFloTfTwcGmWsHVHhAvwDjpRYBTnMj/2lH7zQwtJ1Zshc4U2oNYIXr/OBOhL77jQHUjkc+AHpLrQCMcu/52Z2870Vz33bgN3N8tdQKwP2m4Uv/x30nAdvCfa8C9xidt6RWoAhfIxPduaOBdcAmf87kAZcBhwPHGNeps6FBcgcYZzr/M9DPnZ/mjNzzQFMHel+aa0+U3AEWmAYvrnB+mOtUdI865a8HRodZol5kivMkx0nOAL2Are1Nf3PdIOCpdiLD9mjNPisELu1o+le4/oIw8n924gF8KLkDrDQNfiMYLv3b9z/uawJuDpng2mBE1VD+aPRulBrw/W2hsTqi35nGj0rQ09kR+QkYKDkDLDINft98/wrok6C32GgslJyhmMK2imOt/KwEPfUCB8L9OqtGSM4AL5kOf+YM4ZEJevOMRrPkDDDeNLbNjf78BL2BwG6jMUFyhSKD+8g0dr35/quGsgmas41GS9ZZIIXrivwO7DHHdyToaVHkW6MxWXIFODWMcuRdl8oOSNCcaTQ+yXb0gb4hYLGuzkZz1yVo9gd2GY1rJFeA+1yMriMeWa05QRct/2a1L5Kx1T9kGvuOM3xNCZrDXAnsKskRYLhzUS0uo0uK14EXjMbbKTOo2wEGhypOZI8zgs2JU3+i0dCZNUZyA+gHrDEN3e8ehhrBoQm6jW4x5CHJDaCPFjZNI3XKL3P+f2xi8URrAZHPtQ4oOQE0AK/wT+4EnjPH0xK1b3NTP68VIAq/vNx1/olw7njgMWB6ovYVwX1G7pKcoEhIVrnOP1mNsrS+Ls7lNWcV8VGEuBtc51eFabqxK++prg26SpHqNUouUCxI2IRGmQ+8Zo7PTdQ+D/jB6HytK0GSAxQW+XYX4WmF56Zw/vyQ9i5KCVGBqcFbRL5JqRN256akNW7UdXQurIK2prePOu1tWZS4KPz7bDcyMbY/tgr6lwBbnLYWTE6oTg+6bujWuca1hve9oQrl8aUVVn2ezmJlh6Liandhxg0IY7ug2Vt3e4WFDb/Ko//rWskFim1qNqafm1i31/f7IuABYAf/Rh/EM8AQyQngWdPIe0NCYj9HmDC4MdT8dUPTlcCtwMMhZY11+0odX5KNlfcAc+ge1HMs1IclOQMMcSWsVNrCXj7d3Hh5tiWsSgAnh50ZO8MKrP3EjUkHwvHWELLq9tbHQxY3ISX/LykpKSkpKZHu5C8+ETRdu+5D6AAAAABJRU5ErkJggg==&logoColor=white">
</div>
<div>
	<img src="https://img.shields.io/badge/Axios-391b89?style=for-the-badge&logo=axios&logoColor=white"> 
	<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&&logo=reactquery&logoColor=white"> 
	<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> 
	<img src="https://img.shields.io/badge/Emotion-cb0096?style=for-the-badge&logo=react&logoColor=white">
</div>



### etc.
<div>
	<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">  
</div>

<p align="right"><a href="#top">TOP 🔼</a></p>
<br/>

## **⏰ 프로젝트 일정**

![개발일정](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/121537196/7d2a748f-634b-4723-bfe1-ffabaee3e0f4)

<p align="right"><a href="#top">TOP 🔼</a></p>
<br/>

## **🔗 API명세서와 ERD설계도**

### API 명세서
[https://marbled-teeth-f44.notion.site/c214f75ad9754971b2a3bfb30026b037?v=80d087df81eb43e899eaf11fa02d050c&pvs=4](https://marbled-teeth-f44.notion.site/abb193ef34d84b8e9b0c63dc43a830ab?v=edb9cfe1930b4cf5a0b37853dd6df6f6&pvs=4)

<br/>

### ERD 설계도

![WoofNMeow_ERD ](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/de2d7ae5-ac10-47ac-8cc1-eff351a216ad)

<p align="right"><a href="#top">TOP 🔼</a></p>
<br/>

## **📝 메뉴구조도**

### User 메뉴구조도
<img width="1366" alt="User메뉴구조도" src="https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/6cf83521-1c1d-48d3-be0c-063fa75357ae">

<br/>

### Admin 메뉴구조도
<img width="1366" alt="Admin메뉴구조도" src="https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/63cf70f2-53b8-4c01-8ba1-6f0d934d3e0f">

<p align="right"><a href="#top">TOP 🔼</a></p>
<br/>

## **💻 화면 구현 및 주요 기능 코드 리뷰**

<br/>

### **Oauth2 회원가입 및 로그인 페이지**
  <details>
  <summary>회원가입 영상</summary>
  <div markdown="1">
  
![회원가입](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/9158d176-e9aa-4606-9e72-256f8ec6440c)

  
  </div>
  </details>
  
  <details>
  <summary>간편 로그인 영상(구글, 카카오, 네이버)</summary>
  <div markdown="1">
  
![구글 로그인](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/53f6adf8-12b3-45e5-8c12-f88d1ff47bcf)
![카카오 로그인](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/aa8847ae-8a33-467f-9d29-ffb040e68d19)
![네이버 로그인](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/84eda95c-3f11-4d4f-adf8-e655ae0abcb2)

  
  </div>
  </details>

  <details>
  <summary>Oauth2로그인 및 회원가입 코드리뷰</summary>
  <div markdown="1">
  
## Front-End
**Oauth2 로그인**
```javascript
	const handleGoogleLogin = () => {
			window.location.href = "http://localhost:8080/oauth2/authorization/google"
	}

	const handleKakaoLogin = () => {
			window.location.href = "http://localhost:8080/oauth2/authorization/kakao"
	}

	const handleNaverLogin = () => {
			window.location.href = "http://localhost:8080/oauth2/authorization/naver"
	}
```
- 구글, 카카오, 네이버 간편 로그인을 구현
<br>

**Oauth2 로그인 토큰 저장**
```javascript
	const [ searchParams, setSearchParams ] = useSearchParams();
	const queryClient = useQueryClient();
	useEffect(() => {
		if(!searchParams.get("token")) {
				alert("정상적인 접근이 아닙니다.")
				navigate("/")
		} else {
				localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
				queryClient.refetchQueries("getPrincipal");
		}
	}, []);

	return <Navigate to={"/"}/>
```
- useEffect로 dependency에 아무것도 주지 않아서 이 컴포넌트에 접근했을때 한번만 코드가 실행되도록 함
- Url에 파라미터로 토큰을 받아 localStorage에 accessToken이란 key로 Bearer 표시를 추가하여 토큰을 저장해주고 홈화면으로 보내줌

<br>

**Oauth2 로그인 후 회원가입**
```javascript
	const user = {
		oauth2Id: searchParams.get("oauth2Id"),
		provider: searchParams.get("provider"),
		name: "",
		nickname: "",
		email: "",
		phoneNumber: "",
		defaultAddressNumber: 0,
		defaultAddressName:"",
		defaultAddressDetailName:""
	}

	useEffect(() => {
		if(!searchParams.get("provider")){
			alert("정상적인 접근이 아닙니다.")
			navigate("/")
		}
	})

	const [ signupUser, setSignupUser ] = useState(user);
	
	const handleInputChange = (e) => {
		setSignupUser({
			...signupUser,
			[e.target.name]: e.target.value
		});
	}

	const handleSignupSubmit = async () => {
		try {
			await signupApi(signupUser);
			alert("회원가입 완료");
			window.location.replace("/auth/signin");
		}catch(error) {
			alert("회원가입 중 오류가 발생하였습니다.")
		}
	}

	const handleCancelOnClick = () => {
		navigate(-1)
	}
```
- 간편 로그인 후 회원정보를 추가로 받아 DB에 저장하기 위해 구현
- user객체에 정보를 담아 백앤드로 전달
- 주소 정보는 Daum주소 Api를 사용, Oauth2Id와 Provider는 Bearer토큰에 담겨있는 정보를 가져옴, 나머지 정보는 인풋을 통해 저

<br>

## Back-End
**Controller**
```java
	@ValidAop
	@PostMapping("/api/auth/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupReqDto signupReqDto, BindingResult bindingResult) {
        return ResponseEntity.ok().body(userService.signup(signupReqDto));
	}
```
- 회원가입 요청을 받는 컨트롤러
<br>

**Dto**
```java
	@NotBlank
	private String oauth2Id;
	@NotBlank
	private String provider;
	@Email
	private String email;
	@Pattern(regexp = "^[가-힣]{2,6}$", message = "이름 형식을 다시 확인해주세요.")
	private String name;
	@NotBlank
	private String nickname;
	@Pattern(regexp = "^[0-9]{11}$", message = "전화번호를 다시 확인해주세요.")
	private String phoneNumber;
	@NotBlank
	private String defaultAddressNumber;
	@NotBlank
	private String defaultAddressName;
	@NotBlank
	private String defaultAddressDetailName;

	public User toEntity() {
		return User.builder()
						.oauth2Id(oauth2Id)
						.provider(provider)
						.email(email)
						.name(name)
						.nickname(nickname)
						.phoneNumber(phoneNumber)
						.defaultAddressNumber(defaultAddressNumber)
						.defaultAddressName(defaultAddressName)
						.defaultAddressDetailName(defaultAddressDetailName)
						.build();
	}
```
- 회원가입 Controller에서 받을 정보를 담을 Dto생성
- 이름과 전화번호에만 정규식으로 유효성 검사, 이메일은 어노테이션을 사용해서 검사
- repository에서 entity로 변환하기 위한 메소드 작성성
<br>

**Service**
```java
	@Transactional(rollbackFor = Exception.class)
	public Boolean signup(SignupReqDto signupReqDto) {
			try {
					return userMapper.saveUser(signupReqDto.toEntity()) > 0;
			}catch (Exception e) {
					throw new SignupException
									(errorMapper.errorMapper("회원가입 오류", "회원가입 중 오류가 발생하였습니다."));
			}
	}
```
- 회원가입 요청을 처리하는 서비스
- 회원가입에서 발생하는 오류 처리
<br>

**Repository**
```java
	public Integer saveUser(User user);
```
- 회원 가입을 위한 메소드
<br>

**Entity**
```java
	private int userId;
	private String roleName;
	private String oauth2Id;
	private String provider;
	private String name;
	private String nickname;
	private String email;
	private String phoneNumber;
	private String defaultAddressNumber;
	private String defaultAddressName;
	private String defaultAddressDetailName;
	private String profileUrl;
```
- Dto에서 변환하여 Repository에서 사용할 Entity
<br>

**Mapper**
```xml
	<insert id="saveUser" parameterType="com.woofnmeow.wnm_project_back.entity.User">
		insert into
				user_tb
		values(0,
					'ROLE_USER',
					#{oauth2Id},
					#{provider},
					#{name},
					#{nickname},
					#{email},
					#{phoneNumber},
					#{defaultAddressNumber},
					#{defaultAddressName},
					#{defaultAddressDetailName},
					default)
	</insert>
```
- 회원가입 insert문
- 유저 권한을 기본적으로 USER로 넣어줌
<br>

**Config**
```java
	.and()
	.oauth2Login()
	.successHandler(oauth2SuccessHandler)
	.userInfoEndpoint()
	.userService(principalUserDetailsService);
```
- 간편로그인을 허용하기위해 필터에 코드 추가
<br>

**PrincipalUser**
```java
	@Getter
	private User user;

	public PrincipalUser(User user, Map<String, Object> attributes, String nameAttributeKey) {
			super(null, attributes, nameAttributeKey);
			this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
			ArrayList<SimpleGrantedAuthority> authorities = new ArrayList<>();
			authorities.add(new SimpleGrantedAuthority(user.getRoleName()));
			return authorities;
	}

	@Override
	public String getName() {
			if(user.getProvider().equals("google")) {
					return super.getAttributes().get("sub").toString();
			} else {
					return super.getAttributes().get("id").toString();
			}
	}
```
- Jwt토큰을 만들기위한 PrincipalUser객체
- 카카오나 네이버와 달리 google의 경우 attributes에서 사용자 정보가 담긴 부분의 키값이 sub이기 때문에 getName을 사용할 때 조건이 필요
<br>

**successHandler**
```java
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
			OAuth2AuthenticationToken authenticationToken = (OAuth2AuthenticationToken) authentication;
			OAuth2User oAuth2User = authenticationToken.getPrincipal();

			String oauth2Id = oAuth2User.getName();
			String provider = oAuth2User.getAttribute("provider") == null ? "google" : oAuth2User.getAttribute("provider").toString();

			User user = userMapper.findUserByOauth2Id(oauth2Id);
			
			if(user == null) {
					response.sendRedirect("http://localhost:3000/auth/signup" +
									"?oauth2Id=" + oauth2Id +
									"&provider=" + provider);
					return;
			}
			PrincipalUser principalUser = new PrincipalUser(user, oAuth2User.getAttributes(), provider.equals("google") ? "sub" : "id");

			String accessToken = jwtProvider.createToken(principalUser);
			response.sendRedirect("http://localhost:3000/auth/oauth2/signin" +
							"?token=" + URLEncoder.encode(accessToken, "UTF-8"));
    }
```
- Jwt토큰에 간편로그인을 제공한 회사의 이름을 넣어주기 위해 provider를 추가
- 회원가입한 사용자가 없을 경우 회원가입 화면으로 oauth2Id와 provider를 담아서 보내주었음
- principal객체를 생성해서 Jwt토큰을 생성 후 로그인 화면으로 보내주었음 
<br>

**Controller**
```java
	.and()
	.oauth2Login()
	.successHandler(oauth2SuccessHandler)
	.userInfoEndpoint()
	.userService(principalUserDetailsService);
```
- 간편로그인을 허용하기위해 필터에 코드 추가
<br>

  </div>
  </details>
<br>


### **상품 페이지**
  <details>
  <summary>상품 관련 페이지 영상</summary>
  <div markdown="1">
  
![상품 관련 페이지](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/68a8fd9c-872b-418c-8ef7-760831a1e472)

  </div>
  </details>

  <details>
  <summary>상품 목록 페이지 코드 리뷰</summary>
  <div markdown="1">
    
## 객체

**검색 요청 RequestDto**
```java
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SearchMasterProductReqDto {
    private String petTypeName;
    private String productCategoryName;
    private String searchOption;
    private String searchValue;
    private String sortOption;
    private int pageIndex;
}
```
- 검색 조건에 해당하는 상품 정보를 받아오기 위한 요청 Dto

<br>

**상품 데이터 ResponseDto**
```java
@Data
@Builder
public class GetAllProductsRespDto {
    private int productMstId;
    private String productName;
    private String petTypeId;
    private String productCategoryId;
    private String productThumbnailUrl;
    private String minPrice;
    private String maxPrice;
    private int tempStock;
}
```
- front-end에서 사용하기 위한 상품 목록 데이터 Dto<br>기본적인 정보와 최소가격, 최대가격, 모든 재고의 총 합을 포함한 정보를 담고있다.

<br>


## Front-End

**요청 코드**
```javascript
const [ oldSearchData, setOldSearchData ] = useState({
    petTypeName: type,
    productCategoryName: !!category ? category : 'all',
    searchOption: "all",
    searchValue: "",
    sortOption: "name",
    pageIndex: 1
});
const [ searchData, setSearchData ] = useState({
    petTypeName: type,
    productCategoryName: !!category ? category : 'all',
    searchOption: "all",
    searchValue: "",
    sortOption: "name",
    pageIndex: 1
});
const getProducts = useQuery(["getProducts"], async () => {
    try {
        const response = getAllProductsApi(searchData);
        return await response
    } catch(error) {
        console.log(error)
    }
}, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setOldSearchData(searchData)
        setProducts(response?.data)
    }
})
const getProductsPagenation = useQuery(["getProductsPageNation"], async () => {
    try {
        const response = getProductsCountApi(searchData);
        return response;
    } catch (error) {
        console.error("Error in getProductsCountApi:", error);
        throw error;
    }
},
{
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        const respLastPage = getLastPage(response?.data, 12);
        setLastPage(respLastPage)
        const respStartIndex = getStartIndex(currentPage)
        setStartIndex(respStartIndex)
        const respEndIndex = getEndIndex(respStartIndex, respLastPage);
        setEndIndex(respEndIndex)
        const respTotalPageIndex = getTotalPageIndex(respStartIndex, respEndIndex)
        setTotalPageIndex(respTotalPageIndex)
    }
})
```
- 랜더링 시 요청에 검색 객체를 담아서 조건에 일치하는 상품 정보와 pagenation에 필요한 데이터를 받아온다.<br>그리고 페이지 변경 시 다른 검색 조건들과 충돌을 방지하기 위해 기존 검색 조건을 oldSearchData에 저장해 둔다.

<br>



**화면 출력 코드**

```javascript
return (
  <RootContainer>
      <div css={S.SLayout}>
          <div css={S.SSubContainer}>
              <div css={S.SSelectBox}>
                  <select 
                      options={sortOptions}
                      onChange={handleSortOptionChange}>
                          {sortOptions.map(option => {
                              return <option name='sortOption' key={option.label} value={option.value}>{option.label}</option>
                          })}
                  </select> 
                  <input type="text" name='value' onKeyDown={handleOnKeyPress} onChange={handleSearchInputChange} value={searchInput}/>
                  <button onClick={handleSearchButtonClick}>검색</button>
              </div>
          </div>
          <div css={S.SProductContainer}>
              {!getProducts.isLoading && getProducts?.data?.data.map((product) => {
                  return  <div css={S.SProductBox} key={product.productMstId} >
                              <ul>
                                  <li onClick={handleProductOnclick}>
                                      <img id={product.productMstId} src={product.productThumbnailUrl} alt="" />
                                      <h3>{product.productName}</h3>
                                      <p>
                                          가격 : {product.tempStock <= 0 ? "품절" : product.minPrice?.slice(4, product.minPrice.lastIndexOf())}
                                      </p>
                                  </li>
                              </ul>
                          </div>
              })}
          </div>
          <div css={S.SPageButtonBox}>
              <button
                  onClick={() => handlePageClick(searchData.pageIndex - 1)}
                  disabled={currentPage === 1}
                  >
                      {"<"}
              </button>
              {totalPageIndex.map((page, index) => (
                  <button 
                      css={currentPage === page ? S.selectedPageButton : S.PageButton}
                      name="totalPageIndex"
                      onClick={() => handlePageClick(page)}
                      key={index}>
                      {page}
                  </button>
              ))}
              <button
                  onClick={() => handlePageClick(searchData.pageIndex + 1)}
                  disabled={currentPage === lastPage}
                  >
                      {">"}
              </button>
          </div>
      </div>
  </RootContainer>
);
```
- 검색 옵션을 변경하는 부분은 각 기능별로 onChange를 사용하여 searchData를 변경한다.
- back-end에서 응답받은 데이터를 map을 사용하여 화면에 출력한다.


    
## Back-End 

**Controller**
```java
@GetMapping("api/products/minmax")
public ResponseEntity<?> searchProductsWithMinPriceAndMaxPrice(SearchMasterProductReqDto searchMasterProductReqDto) {
    return ResponseEntity.ok().body(productService.searchProductsWithMinPriceAndMaxPrice(searchMasterProductReqDto));
}
@GetMapping("api/products/count")
public ResponseEntity<?> getCountOfSearchedProducts(SearchMasterProductReqDto searchMasterProductReqDto) {
    return ResponseEntity.ok().body(productService.getCountOfSearchedProducts(searchMasterProductReqDto));
}
```

<br>

**Service**
```java
public List<GetAllProductsRespDto> searchProductsWithMinPriceAndMaxPrice(SearchMasterProductReqDto searchMasterProductReqDto) {
    try {
        List<GetAllProductsVo> getAllProductsVo = productMapper.searchProductsWithMinPriceAndMaxPrice(searchMasterProductReqDto.toSearchProduct());
        List<GetAllProductsRespDto> respDto = new ArrayList<>();
        getAllProductsVo.forEach(vo -> {
                    String allSizeAndPrice = vo.getSizeAndPrice();
                    String[] sizeAndPrice = allSizeAndPrice.split(", ");
                    List<String> priceList = new ArrayList<>();
                    for(String price: sizeAndPrice) {
                        priceList.add(price);
                    }
                    String minPrice = priceList.get(0).replace("/ ", ": ");
                    String maxPrice = "";
                    if (priceList.size() == 2) {
                        maxPrice = priceList.get(1).replace("/ ", ": ");
                    }
                    respDto.add(vo.toRespDto(minPrice, maxPrice));
                }
        );
        return respDto;
    }catch (Exception e) {
        throw new ProductException
                (errorMapper.errorMapper("상품 오류", "상품 검색 중 오류가 발생하였습니다."));
    }
}

public int getCountOfSearchedProducts(SearchMasterProductReqDto searchMasterProductReqDto) {
    try {
        return productMapper.selectCountOfSearchedProducts(searchMasterProductReqDto.toSearchProduct());
    }catch (Exception e) {
        throw new ProductException
                (errorMapper.errorMapper("상품 오류", "상품 리스트를 불러오는 중 오류가 발생하였습니다."));
    }
}
```
- 상품 정보를 가져오면서 문자열로 나눠진 데이터 형태를 substring을 활용하여 key, value 형태로 분류하여 응답한다.

<br>

**Repository**
```java
public List<GetAllProductsVo> searchProductsWithMinPriceAndMaxPrice(SearchMasterProductVo searchMasterProductVo);
public Integer selectCountOfSearchedProducts(SearchMasterProductVo searchMasterProductVo);
```

<br>

**Mybatis Query**
```java
<select id="searchProductsWithMinPriceAndMaxPrice" resultMap="productsWithMinPriceAndMaxPriceMap" >
    select
        pmt.product_mst_id,
        pmt.product_name,
        ptt.pet_type_id,
        pct.product_category_id,
        pmt.product_thumbnail_url,
        GROUP_CONCAT(CONCAT('(', st.size_name, '/ ', pdt.price, ')') SEPARATOR ', ') AS sizes_and_prices,
        (select
            sum(temp_stock)
        from
            product_stock_view psv
            left outer join product_dtl_tb pdt on(pdt.product_dtl_id = psv.product_dtl_id)
            left outer join product_mst_tb subpmt on(subpmt.product_mst_id = pdt.product_mst_id)
        where
            subpmt.product_mst_id = pmt.product_mst_id
        group by
            pmt.product_mst_id) as temp_stock
    from
        product_mst_tb pmt
        left outer join (select
                            product_dtl_id,
                            product_mst_id,
                            row_number() over(partition by product_mst_id order by price) as num,
                            row_number() over(partition by product_mst_id order by price desc) as num2,
                            size_id,
                            price
                        from
                            product_dtl_tb)
        pdt on(pdt.product_mst_id = pmt.product_mst_id and (pdt.num = 1 or pdt.num2 = 1))
        left outer join size_tb st on(st.size_id = pdt.size_id)
        left outer join pet_type_tb ptt on(ptt.pet_type_id = pmt.pet_type_id)
        left outer join product_category_tb pct on(pct.product_category_id = pmt.product_category_id)
    where
    1 = 1
    <choose>
        <when test="searchOption.equals('number')">
            <if test="!searchValue.equals('')">
                and pmt.product_mst_id = #{searchValue}
            </if>
        </when>
        <when test="searchOption.equals('name')">
            and pmt.product_name like concat("%", #{searchValue}, "%")
        </when>
        <otherwise>
            and (pmt.product_name like concat("%", #{searchValue}, "%")
            or pct.product_category_name like concat("%", #{searchValue}, "%")
            or ptt.pet_type_name like concat("%", #{searchValue}, "%"))
        </otherwise>
    </choose>
    <if test="!petTypeName.equals('all')">
        and ptt.pet_type_name_eng = #{petTypeName}
    </if>
    <if test="!productCategoryName.equals('all')">
        and pct.product_category_name_eng = #{productCategoryName}
    </if>
    group by
        pmt.product_mst_id
    order by
    <choose>
        <when test="sortOption.equals('name')">
            pmt.product_name COLLATE utf8mb4_unicode_ci
        </when>
        <when test="sortOption.equals('number')">
            pmt.product_mst_id desc
        </when>
        <when test="sortOption.equals('lowprice')">
            pdt.price asc
        </when>
        <when test="sortOption.equals('highprice')">
            pdt.price desc
        </when>
        <otherwise>
            pmt.product_mst_id desc
        </otherwise>
    </choose>
    limit
    #{pageIndex}, #{limit}
</select>


<select id="selectCountOfSearchedProducts" parameterType="com.woofnmeow.wnm_project_back.vo.SearchMasterProductVo" resultType="java.lang.Integer">
    select
        count(*)
    from
        product_mst_tb pmt
        left outer join pet_type_tb ptt on(ptt.pet_type_id = pmt.pet_type_id)
        left outer join product_category_tb pct on(pct.product_category_id = pmt.product_category_id)
    where
        1 = 1
    <choose>
        <when test="searchOption.equals('number')">
            <if test="!searchValue.equals('')">
                and pmt.product_mst_id = #{searchValue}
            </if>
        </when>
        <when test="searchOption.equals('name')">
            and pmt.product_name like concat("%", #{searchValue}, "%")
        </when>
        <otherwise>
            and (pmt.product_name like concat("%", #{searchValue}, "%")
            or pct.product_category_name like concat("%", #{searchValue}, "%")
            or ptt.pet_type_name like concat("%", #{searchValue}, "%"))
        </otherwise>
    </choose>
    <if test="!petTypeName.equals('all')">
        and ptt.pet_type_name_eng = #{petTypeName}
    </if>
    <if test="!productCategoryName.equals('all')">
        and pct.product_category_name_eng = #{productCategoryName}
    </if>
</select>
```

- 상품의 기본 정보에 추가로 최소가격과 최대가격, 그리고 모든 재고의 총합을 응답 객체로 반환한다.<br>모든 재고의 총합이 0이하일 경우 front-end에서 품절로 출력하기 위해 사용한다.

- 검색 조건에 일치하는 상품의 갯수도 pagenation기능을 위해 응답한다.

  </div>
  </details>
  




  <details>
  <summary>상품 상세 내용 페이지 코드 리뷰</summary>
  <div markdown="1">
    
## 객체

**ResponseDto**
```java
@Data
@Builder
public class GetProductRespDto {
    private String productName;
    private String productDetailText;
    private String productThumbnailUrl;
    private String productDetailUrl;
    private int petTypeId;
    private String petTypeName;
    private int productCategoryId;
    private String productCategoryName;
    private String createDate;

    private List<ProductDtl> productDtlList;
}
```
- 상품에 대한 이름, 설명, 사진 등은 상위 객체에 담겨있고, 각 사이즈별 가격과 재고는 productDtlList에 담아서 응답



## Front-End

**요청 전송**
```javascript
const { productId } = useParams();

const getProduct = useQuery(["getProduct"], async () => {
    try {
        const response = getProductMstApi(productId);
        return await response
        
    } catch(error) {
        console.log(error)
    }
}, {
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setProduct(response.data)
    }
})

const getReviewByProduct = useQuery(["getReviewByProduct"], async () => {
    try {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        const response = await getReviewByProductApi(productId, option);
        return response;
    } catch (error) {
        console.log(error)
    }
}, {
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setProductReview(response?.data)
    }
})
```
- 상품 목록 페이지에서 상품을 클릭 시, params로 상품Id를 받아서 해당 상품에 상세정보(모든 사이즈의 가격과 재고를 포함)와 리뷰를 조회하도록 요청 전송

<br>

**화면 출력**
```javascript
return (
    <RootContainer>
        <div>
          <div css={S.SLayout}>
              <div css={S.STopContainer} >
                  <div>
                      <img css={S.SThumbnailImg} src={product.productThumbnailUrl} />
                  </div>
                  <div css={S.SOrderInfoBox}>
                      <h2>{product.productName}</h2>
                      <p dangerouslySetInnerHTML={{__html: product.productDetailText}}></p>
                      <div css={S.SSelectBox}>
                          <Select css={S.SSelect} onChange={selectOnChange} options={product.productDtlList?.map(pdt => {
                              return {
                                  value: pdt.productDtlId,
                                  label: `${pdt.size.sizeName === "no" ? product.productName : pdt.size.sizeName}${pdt.tempStock > 0 ? "(수량: " + pdt.tempStock + ")" : "(품절)"}`};
                          })
                          }/>
                      </div>
                      <ul css={S.SOrderListBox}>
                          {selectedProducts.map((selectedProduct, index) => 
                              <li key={index}>
                                  <div css={S.SListBox}>
                                      <h5>
                                          {product.productName}<br/>
                                          -{selectedProduct.sizeName}
                                      </h5>
                                      <input type="number" defaultValue={1} min={1} max={99} onChange={(e) => countOnChange(e.target, index)}/>
                                      <p>{selectedProduct.price.toLocaleString("ko-KR")}원</p>
                                      <button onClick={() => handleDeleteProductOnClick(index)}>X</button>
                                  </div>
                              </li>
                          )}
                      </ul>
                      <div css={S.SPriceInfo}>
                          <p>Total</p>
                          <h3>{selectedProducts.reduce((total, selectedProduct) => {
                              return total += selectedProduct.price}, 0).toLocaleString("ko-KR")}원</h3>
                      </div>
                      <div css={S.SButtonBox}>
                          <button onClick={buyNowOnClick}>BUY NOW</button>
                          <button onClick={handleAddToCartOnClick}>ADD TO CART</button>
                      </div>
                  </div>
              </div>
              <div css={S.SDetailContainer}>
                  <img css={S.SDDetailImg} src={product.productDetailUrl} alt="" />
              </div>
          </div>
          <div css={S.SReviewContainer}>
              <div css={S.SH1}>고객님들의 소중한 구매후기 ⭐</div>
              <ul>
                  {productReview.map(rev => {
                      return <li>
                          <div css={S.SReviewList}>
                              <div css={S.SreviewHeader}>
                                  <img src={rev.profileUrl} alt=""/>
                                  <div css={S.SNickname}>{rev.nickname}</div>
                                  <div css={S.SProductSizeBox}>
                                      <div>{product.productName} / </div>
                                      <div> size {rev.sizeName}</div>
                                  </div>
                                  <div css={S.SReivewDate}>{rev.reviewDate}</div>
                              </div>
                              <div css={S.SReviewContentBox}>
                                  {!!rev.reviewImgUrl ? <div><img src={rev.reviewImgUrl} alt="" css={S.SReviewImg}/></div> : <div></div>}
                                  <div css={S.SReviewContent}>{rev.reviewContent}</div>
                              </div>
                          </div>
                      </li>
                  })}
              </ul>
          </div>
        </div>
    </RootContainer>
);
```
- 응답받은 객체의 사이즈별 가격과 재고를 확인하여 품절 혹은 가격을 출력하도록 조건 설정
- 결제 절차를 진행하거나 장바구니에 담기 전 선택한 상품의 갯수를 추가하거나 여러 사이즈의 상품을 담을 수 있도록 코드가 작성되었다.

<br>

**예외 상황 처리**
```javascript
const buyNowOnClick = () => {
    if(!principal.data) {
        alert("로그인 후 사용해주세요.")
        navigate("/auth/signin")
    } else {
        if(selectedProducts.length === 0) {
            alert("상품을 선택해주세요.")
        } else {
            localStorage.setItem("orderData", JSON.stringify(selectedProducts));
            localStorage.setItem("isCart", false);
            navigate("/order")
        }
    }
}

const selectOnChange = (option) => {
    const productDtl = product.productDtlList.filter(pdt => pdt.productDtlId === option.value)[0];

    if(productDtl.tempStock <= 0) {
        alert("해당 상품은 품절입니다.");
        return;
    }

    if(selectedProducts.filter(selectedProduct => selectedProduct.productDtlId === productDtl.productDtlId).length > 0){
        alert("해당 상품은 이미 선택된 상품 입니다.");
        return;
    }

    const newSelectedProduct = {
        productDtlId: productDtl.productDtlId,
        sizeName: productDtl.size.sizeName,
        price: productDtl.price,
        count: 1,
        productDtl: {
            price: productDtl.price,
            size: {
                sizeId: productDtl.size.sizeId,
                sizeName: productDtl.size.sizeName
            },
            productMst: {
                productName: product.productName,
                productThumbnailUrl: product.productThumbnailUrl
            }
        },
    }
    setSelectedProducts([...selectedProducts, newSelectedProduct]);
}

const countOnChange = (target, index) => {
    const pdt = product.productDtlList.filter(pdt => pdt.productDtlId === selectedProducts[index].productDtlId)[0]; 
    const updateSelectedPorudcts = [...selectedProducts];
    updateSelectedPorudcts[index].count = parseInt(target.value);
    updateSelectedPorudcts[index].price = pdt.price * parseInt(target.value);

    if(updateSelectedPorudcts[index].count > pdt.tempStock) {
        alert("현재 재고 보다 많이 선택되었습니다.")
        target.value = pdt.tempStock;
        return
    }

    setSelectedProducts([...updateSelectedPorudcts]);
}
```
- 정상적인 동작이 아닐 경우의 처리<br>ex) 비로그인 구매, 상품 미선택 구매, 품절 상품 구매, 재고보다 많은 수량 구매

<br>

    
## Back-End

**Controller**
```java
@GetMapping("/api/product/master/{productMstId}")
public ResponseEntity<?> getProductByProductMstId(@PathVariable int productMstId) {
    return ResponseEntity.ok().body(productService.getProductByProductMstId(productMstId));
}
```

<br>

**Service**
```java
public GetProductRespDto getProductByProductMstId(int productMstId) {
    try {
        return productMapper.selectProductByProductMstId(productMstId).toProductRespDto();
    }catch (Exception e) {
        throw new ProductException(errorMapper.errorMapper
                ("상품 오류", "상품 정보 조회 중 오류가 발생하였습니다."));
    }
}
```

<br>

**Repository**
```java
public ProductMst selectProductByProductMstId(int productMstId);
```

<br>

**Mybatis ResultMap**
```java
<resultMap id="productMstMap" type="com.woofnmeow.wnm_project_back.entity.ProductMst">
    <id property="productMstId" column="product_mst_id" />
    <result property="productName" column="product_name" />
    <result property="petTypeId" column="pet_type_id" />
    <result property="productCategoryId" column="product_category_id" />
    <result property="productDetailText" column="product_detail_text" />
    <result property="productThumbnailUrl" column="product_thumbnail_url" />
    <result property="productDetailUrl" column="product_detail_url" />
    <result property="createDate" column="create_date" />
    <association property="petType" resultMap="petTypeMap"/>
    <association property="category" resultMap="categoryMap"/>
    <collection property="productDtlList" javaType="list" resultMap="productDtlMap"/>
</resultMap>

<resultMap id="productDtlMap" type="com.woofnmeow.wnm_project_back.entity.ProductDtl">
    <id property="productDtlId" column="product_dtl_id" />
    <result property="productMstId" column="product_mst_id" />
    <result property="price" column="price" />
    <result property="sizeId" column="size_id" />
    <result property="actualStock" column="actual_stock" />
    <result property="tempStock" column="temp_stock" />
    <association property="size" resultMap="sizeMap" />
</resultMap>

<resultMap id="sizeMap" type="com.woofnmeow.wnm_project_back.entity.Size">
    <id property="sizeId" column="size_id"/>
    <result property="sizeName" column="size_name"/>
</resultMap>

<resultMap id="petTypeMap" type="com.woofnmeow.wnm_project_back.entity.PetType">
    <id property="petTypeId" column="pet_type_id"/>
    <result property="petTypeName" column="pet_type_name"/>
</resultMap>

<resultMap id="categoryMap" type="com.woofnmeow.wnm_project_back.entity.Category">
    <id property="productCategoryId" column="product_category_id"/>
    <result property="productCategoryName" column="product_category_name"/>
</resultMap>
```

<br>

**Mybatis Query**
```java
<select id="selectProductByProductMstId" resultMap="productMstMap">
    select
        pdt.product_dtl_id,
        pmt.product_mst_id,
        pmt.product_name,
        pdt.price,
        ptt.pet_type_id,
        ptt.pet_type_name,
        pct.product_category_id,
        pct.product_category_name,
        st.size_id,
        st.size_name,
        pmt.product_detail_text,
        pmt.product_thumbnail_url,
        pmt.product_detail_url,
        psv.actual_stock,
        psv.temp_stock,
        pmt.create_date
    from
        product_mst_tb pmt
        left outer join  product_dtl_tb pdt on(pdt.product_mst_id = pmt.product_mst_id)
        left outer join product_category_tb pct on(pct.product_category_id = pmt.product_category_id)
        left outer join pet_type_tb ptt on(ptt.pet_type_id = pmt.pet_type_id)
        left outer join size_tb st on(st.size_id = pdt.size_id)
        left outer join product_stock_view psv on(psv.product_dtl_id = pdt.product_dtl_id)
    where
        pmt.product_mst_id = #{productMstId}
</select>
```
- resultMap collection을 이용하여 productMst 객체 하위에 productDtl이 복수의 List로 응답 가능하도록 코드 작성

  </div>
  </details>
  
  
<br/>

### **장바구니 페이지**
  <details>
  <summary>장바구니 페이지 영상</summary>
  <div markdown="1">
  
  ![장바구니 페이지](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/3470cdfe-7dd3-4f4b-bc49-ef36879245fe)

  
  </div>
  </details>
  
  <details>
  <summary>장바구니 페이지 코드 리뷰</summary>
  <div markdown="1">

  ## Front-End
  **장바구니 등록**
  ```javascript
       const handleAddToCartOnClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            if(!principal.data) {
                alert("로그인 후 사용해주세요.")
                navigate("/auth/signin")
            } else {
                if(selectedProducts.length === 0) {
                    alert("상품을 선택해주세요.")
                } else {
                    if(window.confirm("해당 상품을 장바구니에 담겠습니까?")) {
                        addToCartApi(principal.data.data.userId, [...selectedProducts], option);
                        alert("장바구니에 상품이 정상적으로 담겼습니다.")
                        navigate(`/product/cart/${principal?.data?.data?.userId}`)
                    } else {
                        alert("취소되었습니다.")
                    }
                }
            }
        } catch(error) {
            console.log(error)
        }
    }
  ```
  - 로그인(accessToken) 상태에서 장바구니 등록이 가능하다
  - selectProduct 안에는 상품의 상세ID와 상품 수량의 데이터가 들어가 있다.
  <br/>
  
  **장바구니 조회**
  ```javascript
       const getCartProducts = useQuery(["getCartProducts"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getCartApi(principal.data.data.userId, option);
            return await response;
        } catch(error) {
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setCartProducts(!response?.data ? [] : response.data);
        }
    })
  ```
  - React-Query를 사용하여 장바구니 상품 조회를 할 수 있다.
  - 해당 로그인한 userId만 조회가 가능하다.
  <br/>

  **장바구니 삭제**
 ```javascript
    const handleDeleteProductOnClick = async (index) => {
        
        if(window.confirm("선택하신 상품을 삭제하시겠습니까? ")) {
            try {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }

                const response = await deleteCartApi(cartProducts[index].cartId, option);
                if (response.data === true) {
                    const deleteProduct = [...cartProducts]
                    deleteProduct.splice(index, 1);
                    setCartProducts(deleteProduct);
                    window.location.reload();
                } else {
                    throw new Error("상품 삭제 실패")
                }
            } catch(error) {
                console.log(error)
            }
        }else {
            return;
        }
    }
 ```
  - 장바구니 페이지에서 해당 로그인한 userId만 삭제가 가능하다.
  <br/>

  
  ## Back-End
  **Controller**
  ```java
    // 장바구니 등록
    @PostMapping("/api/cart/{userId}")
    public ResponseEntity<?> addProductToCart(@PathVariable int userId, @RequestBody List<AddCartReqDto> addCartReqDto) {
        return ResponseEntity.ok(cartService.addProductToCart(userId, addCartReqDto));
    }

    // 장바구니 조회
    @GetMapping("/api/cart/{userId}")
    public ResponseEntity<?> getCartByUserId(@PathVariable int userId) {
        return ResponseEntity.ok(cartService.getCartByUserId(userId));
    }

    // 장바구니 삭제
    @DeleteMapping("/api/cart/{cartId}")
    public ResponseEntity<?> removeProductOfCart(@PathVariable int cartId) {
        return ResponseEntity.ok(cartService.removeProductOfCart(cartId));
    }
  ```
  - 장바구니 등록 같은 경우 List형태로 올수가 있어 List로 데이터를 받는다
  <br/>

  **Dto**
  ```java
  @NoArgsConstructor
  @AllArgsConstructor
  @Builder
  @Data
  public class AddCartReqDto {
      private int productDtlId;
      private int count;
  
      public Cart toCartProductsEntity(int userid) {
          return Cart.builder()
                  .userId(userid)
                  .productDtlId(productDtlId)
                  .count(count)
                  .build();
      }
  }
  ```
  - Dto는 상품의 상세ID와 상품 수량의 데이터만 받고 Builder를 통해 Entity로 변환한다.
  - userId는 로그인한 회원의 userId를 넣는다.
  ```java
  @Data
  @Builder
  public class GetUserCartProductsRespDto {
      private int cartId;
      private int productDtlId;
      private int count;
  
      private ProductDtl productDtl;
  }
  ```
  - 장바구니 조회는 장바구니ID와 상품상세ID, 상품수량 그리고 상품상세에 대한 Entity의 데이터를 Front로 보내준다.
  <br/>

  **Entity**
  ```java
  @NoArgsConstructor
  @AllArgsConstructor
  @Builder
  @Data
  public class Cart {
      private int cartId;
      private int userId;
      private int productDtlId;
      private int count;
  
      private ProductDtl productDtl;
  
      public GetUserCartProductsRespDto toGetUserCartProductsRespDto() {
          return GetUserCartProductsRespDto.builder()
                  .cartId(cartId)
                  .productDtlId(productDtlId)
                  .count(count)
                  .productDtl(productDtl)
                  .build();
      }
  }
  ```
  - Entity에서 ResponseDto로 변환하는 로직이다.
  <br/>

  **Repository**
  ```java

  @Mapper
  public interface CartMapper {
    // 장바구니 등록
    public int insertCart(Cart cart);

    // 장바구니 조회
    public List<Cart> selectCartByUserId(int userId);

    // 장바구니 삭제
    public int deleteProductOfCart(int cartId)
  }
  ```
  - Mapper를 통해서 DB(MyBatis)와 매핑해주는 역할
  <br/>
  
  
  **mapper(MyBatis)**
  ```xml
   <resultMap id="cartMap" type="com.woofnmeow.wnm_project_back.entity.Cart">
        <id property="cartId" column="cart_id"/>
        <result property="userId" column="user_id"/>
        <result property="productDtlId" column="product_dtl_id"/>
        <result property="count" column="count"/>
        <association property="productDtl" resultMap="productDtlMap"/>
    </resultMap>

    <resultMap id="productDtlMap" type="com.woofnmeow.wnm_project_back.entity.ProductDtl">
        <id property="productDtlId" column="product_dtl_id" />
        <result property="productMstId" column="product_mst_id" />
        <result property="price" column="price" />
        <result property="sizeId" column="size_id" />
        <result property="actualStock" column="actual_stock" />
        <result property="tempStock" column="temp_stock" />
        <association property="productMst" resultMap="productMstMap"/>
        <association property="size" resultMap="sizeMap"/>
    </resultMap>

    <resultMap id="productMstMap" type="com.woofnmeow.wnm_project_back.entity.ProductMst">
        <id property="productMstId" column="product_mst_id"/>
        <result property="productName" column="product_name"/>
        <result property="productCategoryId" column="product_category_id"/>
        <result property="productDetailText" column="product_detail_text"/>
        <result property="productThumbnailUrl" column="product_thumbnail_url"/>
        <result property="productDetailUrl" column="product_detail_url"/>
        <result property="createDate" column="create_date"/>
        <association property="petType" resultMap="petTypeMap" />
        <association property="category" resultMap="categoryMap" />
    </resultMap>

    <resultMap id="petTypeMap" type="com.woofnmeow.wnm_project_back.entity.PetType">
        <id property="petTypeId" column="pet_type_id"/>
        <result property="petTypeName" column="pet_type_name"/>
    </resultMap>

    <resultMap id="categoryMap" type="com.woofnmeow.wnm_project_back.entity.Category">
        <id property="productCategoryId" column="product_category_id"/>
        <result property="productCategoryName" column="product_category_name"/>
    </resultMap>

    <resultMap id="sizeMap" type="com.woofnmeow.wnm_project_back.entity.Size">
        <id property="sizeId" column="size_id"/>
        <result property="sizeName" column="size_name"/>
    </resultMap>

    <select id="selectCartByUserId" resultMap="cartMap">
      select
          ct.cart_id,
          ct.count,
          ct.user_id,
          pdt.product_dtl_id,
          pdt.price,
          pmt.product_name,
          pmt.product_thumbnail_url,
          st.size_name,
          psv.actual_stock,
          psv.temp_stock
      from
          cart_tb ct
          left outer join product_dtl_tb pdt on(pdt.product_dtl_id = ct.product_dtl_id)
          left outer join product_mst_tb pmt on(pmt.product_mst_id = pdt.product_mst_id)
          left outer join size_tb st on(st.size_id = pdt.size_id)
          left outer join product_stock_view psv on(psv.product_dtl_id = pdt.product_dtl_id)
      where
          ct.user_id = #{user_id}
    </select>
  ```
  - 조회는 resultMap를 사용해서 상품의 정보를 가져올 수 있도록 하였다.
  
  ```xml
  <insert id="insertCart" parameterType="com.woofnmeow.wnm_project_back.entity.Cart" statementType="CALLABLE">
      {call p_add_cart(#{userId}, #{productDtlId}, #{count})}
  </insert>
  ```
  ```PROCEDURE
  CREATE DEFINER=`woofnmeow`@`%` PROCEDURE `p_add_cart`(
	in vn_user_id int,
	in vn_product_dtl_id int,
    in vn_count int
  )
  BEGIN
  	declare vn_search_count int;
  
  	select
  		count(*) into vn_search_count
      from
  		cart_tb
  	where
  		user_id = vn_user_id
  		and product_dtl_id = vn_product_dtl_id;
  
  	if vn_search_count = 0 then 
  		insert into cart_tb
  		values(0, vn_user_id, vn_product_dtl_id, vn_count);
  	else
  		update cart_tb
  		set count = count + vn_count
  		where
  			user_id = vn_user_id
  		and product_dtl_id = vn_product_dtl_id;
      end if;
  END
  ```
  - 장바구니 등록 SQL 쿼리문은 같은 상품을 등록할시 수량만 올라갈 수 있도록 하여 프로시져를 사용하였다.
  - 없는 상품이면 insert / 있는 상품이면 update 
  
  ```xml
    <delete id="deleteProductOfCart">
        delete
        from
            cart_tb
        where
            cart_id = #{cartId}
    </delete>
  ```
  - 장바구니 상품을 삭제하는 SQL 쿼리문 이다.
  <br/>
  
  **Service**
  ```java
    // 장바구니 등록
    @Transactional(rollbackFor = Exception.class)
    public Boolean addProductToCart(int userId, List<AddCartReqDto> addCartReqDto) {
        try {
            return addCartReqDto.stream()
                    .map(dto -> dto.toCartProductsEntity(userId))
                    .map(cart -> cartMapper.insertCart(cart))
                    .allMatch(successCount -> successCount == 1);
        }catch (Exception e) {
            throw new CartException
                    (errorMapper.errorMapper("장바구니 오류", "상품을 장바구니에 담는 중 오류가 발생하였습니다."));
        }
    }

    // 장바구니 조회
    public List<GetUserCartProductsRespDto> getCartByUserId(int userId) {
        try {
            return cartMapper.selectCartByUserId(userId)
                    .stream()
                    .map(Cart::toGetUserCartProductsRespDto)
                    .collect(Collectors.toList());
        }catch (Exception e) {
            throw new CartException
                    (errorMapper.errorMapper("장바구니 오류", "장바구니를 불러오는 중 오류가 발생하였습니다."));
        }
    }

    // 장바구니 삭제
    @Transactional(rollbackFor = Exception.class)
    public Boolean removeProductOfCart(int cartId) {
        try {
            return cartMapper.deleteProductOfCart(cartId) > 0;
        }catch (Exception e) {
            throw new CartException
                    (errorMapper.errorMapper("장바구니 오류", "장바구니에서 상품을 삭제하는 중 오류가 발생하였습니다."));
        }
    }
  ```
  - 장바구니 등록 : 로그인한 userId와 상품 정보를 이용하여 장바구니에 등록하고 둘다 successCount가 1이면 성공, 실패시 롤백과 예외처리를 던진다.
  - 장바구니 조회 : 로그인한 userId로 조회를 하고 각 상품을 ResponseDto를 List로 반환한다.
  - 장바구니 삭제 : 장바구니 ID로 해당되는 상품을 삭제한다. 실패시 롤백과 예외처리를 던진다.
  <br/>
  </div>
  </details>

  <br/>
  
### **구매 페이지**
  <details>
  <summary>상품 바로 구매 영상</summary>
  <div markdown="1">
  
![상품 바로 구매](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/6a0a50f1-67c9-4a6a-a70b-bb9d9aebe435)

  
  </div>
  </details>
  
  <details>
  <summary>장바구니 구매 영상</summary>
  <div markdown="1">
  
![장바구니 구매](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/66b8bd78-e5b5-4d61-ab47-5679f7410f82)

  
  </div>
  </details>

  <details>
  <summary>상품 바로 구매 및 장바구니 상품 구매 코드 리뷰</summary>
  <div markdown="1">

  ## Front-End
  **상품 바로 구매**
  ```javascript
    const buyNowOnClick = () => {
        if(!principal.data) {
            alert("로그인 후 사용해주세요.")
            navigate("/auth/signin")
        } else {
            if(selectedProducts.length === 0) {
                alert("상품을 선택해주세요.")
            } else {
                localStorage.setItem("orderData", JSON.stringify(selectedProducts));
                localStorage.setItem("isCart", false);
                navigate("/order")
            }
        }
    }
  ```
  - 선택한 상품과 isCart를 로컬스토리지에 담아서 구매페이지로 넘어간다.
  <br/>

  **장바구니 상품 구매**
  ```javascript
    const handleBuyOnClick = () => {
        if(!principal.data) {
            alert("로그인 후 사용해주세요.")
            navigate("/auth/signin")
        } else {
            if(selectedCartProduct.length === 0) {
                alert("상품을 선택해주세요.")
            } else {
                const overStockProducts = cartProducts.filter(cp => selectedCartProduct.filter(scp => scp.productDtlId === cp.productDtl.productDtlId)[0]?.count > cp.productDtl.tempStock);
                if(overStockProducts.length > 0) {
                    alert(`상품의 재고가 부족합니다.\n${overStockProducts?.map(osp => {
                        return `${osp.productDtl.productMst.productName}[size: ${osp.productDtl.size.sizeName}]\n`
                    }).join("")}`)
                    return
                } 
                localStorage.setItem("orderData", JSON.stringify(selectedCartProduct))
                localStorage.setItem("isCart", true);
                navigate("/order")
            }
        }
    }
  ```
  - 장바구니에 담겨있는 상품중 선택한 상품과 isCart를 로컬스토리지에 담아서 구매페이지로 넘어간다.
  - 만약 선택한 상품의 재고가 부족하면 상품의 재고가 부족하다는 알림창을 띄워준다.
  <br/>
  
  **구매 페이지**
  ```javascript
    const [ buyProductList, setBuyProductList ] = useState(JSON.parse(localStorage.getItem("orderData")));
  ```
  - 로컬스토리지에 담아서 넘어온 상품 데이터를 useState로 상태를 관리한다.
  <br/>

  **구매 버튼(KakaoPay, TossPay)**
 ```javascript
    const handlePaymentSubmit = (provider) => {
        if(!window.IMP) {return} 
        const { IMP } = window;
        IMP.init("imp31774216");

        const paymentData = {
            pg: "",
            pay_method: "",
            merchant_uid: `mid_${new Date().getTime()}`, // 구매자 식별코드(결제날,시간)
            amount: priceInfo.finalPrice, // 금액
            name:  'Woof&Meow',// 상품이름
            buyer_name: principal?.data?.data?.name, // 구매자 이름
            buyer_email: principal?.data?.data?.email
        }

        switch(provider) {
            case "kakao": 
                paymentData.pg = "kakaopay";
                paymentData.pay_method = "kakaopay";
                break;
            case "toss": 
                paymentData.pg = "tosspay";
                paymentData.pay_method = "tosspay";
                break;
        }

        IMP.request_pay(paymentData, (response) => {
            const { success, error_msg } = response;

            if(success) {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }

                const order = {
                    userId: principal.data.data.userId,
                    shippingName: shippingUserInfo.name,
                    shippingPhone: shippingUserInfo.phone,
                    shippingAddressNumber: shippingUserInfo.addressNumber,
                    shippingAddressName: shippingUserInfo.addressName,
                    shippingAddressDetailName: shippingUserInfo.addressDetailName,
                    orderProductData: [...buyProductList],
                    isCart: localStorage.getItem("isCart")
                }

                addOrderApi(order, option)
                .then(response => {
                    alert("결제가 완료되었습니다.");
                    localStorage.removeItem("orderData")
                    navigate("/")
                    console.log(response);
                })
            } else {
                alert(error_msg)
            }
        });
    }
 ```
  - KakaoPay, TossPay 둘 중 하나를 선택하여 결제를 한다.
  - 결제가 완료되면 구매할때 기입한 데이터들을 Axios를 통해 Back-End로 보내준다.
  - 이때 로컬스토리지에 있는 isCart도 같이 보내준다.
  <br/>

  
  ## Back-End
  **Controller**
  ```java
    @PostMapping("/api/order")
    public ResponseEntity<?> addOrder(@RequestBody AddOrderReqDto addOrderReqDto) {
        return ResponseEntity.ok().body(orderService.addOrder(addOrderReqDto));
    }
  ```
  - Front-End에서 넘어온 데이터를 AddOrderReqDto로 받는 로직이다.
  <br/>

  **Dto**
  ```java
    @Data
    public class AddOrderReqDto {
    // 배송지 정보
    private int userId;
    private String shippingName;
    private String shippingPhone;
    private String shippingAddressNumber;
    private String shippingAddressName;
    private String shippingAddressDetailName;
    // 주문 상품 정보
    private List<OrderProductsReqDto> orderProductData;
    // 장바구니 구매, 바로 구매 구별
    private Boolean isCart;

    public Order toOrderEntity() {
        return Order.builder()
                .userId(userId)
                .shippingName(shippingName)
                .shippingPhone(shippingPhone)
                .shippingAddressNumber(shippingAddressNumber)
                .shippingAddressName(shippingAddressName)
                .shippingAddressDetailName(shippingAddressDetailName)
                .build();
    }
}
  ```
  - Dto에는 구매시 기입한 데이터와 isCart가 있다.
  - toOrderEntity는 Dto의 데이터를 Entity로 변환한다.
  <br/>

  **Entity**
  ```java
  @NoArgsConstructor
  @AllArgsConstructor
  @Data
  @Builder
  public class Order {
      private int orderId;
      private int userId;
      private LocalDateTime orderDate;
      private String shippingName;
      private String shippingPhone;
      private String shippingAddressNumber;
      private String shippingAddressName;
      private String shippingAddressDetailName;
      private int orderStatus;
  ```
  - Dto에서 변환한 데이터를 받는 Entity이다.
  - DB의 테이블과 컬럼명이 동일하다.
  ```java
  @NoArgsConstructor
  @AllArgsConstructor
  @Builder
  @Data
  public class OrderProducts {
      private int orderProductsId;
      private int orderId;
      private int productDtlId;
      private int count;
  ```
  - Order Entity는 배송관련 데이터를 담는 Entity이면 OrderProducts는 구매 상품의 데이터를 담는 Entity이다.
  <br/>
  
  **Repository**
  ```java
@Mapper
public interface OrderMapper {
    @Options(useGeneratedKeys = true, keyProperty = "orderId")
    public Integer insertOrder(Order order);
    public Integer insertProductsToOrder(Map<String, Object> reqMap);
}
  ```
  - 주문을 추가하고 상품도 같이 추가되는 로직이다.
  
  ```java
@Mapper
public interface CartMapper {
    public int deleteProductOfCartWhenIsCart(DeleteOrderCartVo deleteOrderCartVo);
}
  ```
  - 해당 로직은 장바구니의 상품을 구매할지 장바구니 들어있는 데이터를 삭제하는 로직이다.
  <br/>
  
  
  **mapper(MyBatis)**
  ```xml
    <insert id="insertOrder" parameterType="com.woofnmeow.wnm_project_back.entity.Order" useGeneratedKeys="true" keyProperty="orderId">
        insert into
            order_tb
        values
            (0, #{userId}, now(), #{shippingName}, #{shippingPhone}, #{shippingAddressNumber}, #{shippingAddressName}, #{shippingAddressDetailName}, 0)
    </insert>

    <insert id="insertProductsToOrder" parameterType="hashmap">
        insert into
            order_products_tb
        values(0, #{orderId}, #{productDtlId}, #{count})
    </insert>
  ```
  - DB에 결제시 배송관련 데이터와 구매 상품 관련 데이터를 추가하는 SQL쿼리문이다.
  
  ```xml
    <delete id="deleteProductOfCartWhenIsCart">
        delete
        from
            cart_tb
        where
            user_id = #{userId}
        and product_dtl_id in (
        <foreach collection="products" item="productDtlId" separator=",">
            #{productDtlId}
        </foreach>
        )
    </delete>
  ```
  - 로그인한 userId를 통해 장바구니에 있는 상품 목록을 삭제하는 SQL쿼리문이다.
  <br/>

  **Vo**
  ```java
  @Builder
  @Data
  public class DeleteOrderCartVo {
      private int userId;
      private List<Integer> products;
  }
  ```
  - 장바구니 상품을 구매할시 삭제할 상품의 데이터만 삭제하려고 VO를 사용했다.
  <br/>
  
  **Service**
  ```java
    @Transactional(rollbackFor = Exception.class)
    public boolean addOrder(AddOrderReqDto addOrderReqDto) {
        try {
            Order order = addOrderReqDto.toOrderEntity();
            orderMapper.insertOrder(order);
            addOrderReqDto.getOrderProductData().forEach(productData -> {
                orderMapper.insertProductsToOrder(productData.toProductDtlMap(order.getOrderId()));
            });
            if(addOrderReqDto.getIsCart()) {
                cartMapper.deleteProductOfCartWhenIsCart(DeleteOrderCartVo.builder()
                        .userId(addOrderReqDto.getUserId())
                        .products(addOrderReqDto.getOrderProductData().stream()
                                .map(orderProduct -> orderProduct.getProductDtlId())
                                .collect(Collectors.toList()))
                        .build());
            }
            return true;
        }catch (Exception e) {
            throw new OrderException
                    (errorMapper.errorMapper("주문 오류", "주문 중 오류가 발생하였습니다."));
        }
    }
  ```
  - insertOrder에는 Order 배송관련 데이터를 넣는다.
  - insertProductsToOrder에는 Dto안에 있는 getOrderProductData를 반복문을 돌려서 데이터를 넣는다.
  - 만약 Dto안에 있는 isCart가 True이면 장바구니에 있는 상품 데이터를 삭제한다.
  <br/>
  
  </div>
  </details>
<br/>


### **리뷰 페이지**
  <details>
  <summary>리뷰 페이지 영상</summary>
  <div markdown="1">
  
![리뷰 페이지](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/fbfe5c35-1140-4276-8e6a-837349d4c588)

  
  </div>
  </details>

<br/>

### **관리자용 회원 주문 내역 관리 페이지**
  <details>
  <summary>관리자용 회원 주문 내역 관련 페이지 영상 </summary>
  <div markdown="1">
    
![관리자용 회원 주문 내역 관리](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/fbd6d0fc-c262-4bef-aafa-6746af695b8b)

  </div>
  </details>
<br/>

### **관리자용 상품 관리 페이지**
  <details>
  <summary>관리자용 상품 관련 페이지 영상</summary>
  <div markdown="1">
    
![관리자용 상품 관리 페이지](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/2bab739f-90bb-4522-842b-fd09f2878b30)

  
  </div>
  </details>

  <details>
  <summary>관리자 상품 추가 페이지 코드 리뷰</summary>
  <div markdown="1">

## 객체
   
**RequestDto**
```java
@Data
public class AddProductReqDto {
    private String productName;
    private int price;
    private int petTypeId;
    private int productCategoryId;
    private String productDetailText;
    private String productThumbnailUrl;
    private String productDetailUrl;
}
```
   <br>


 ## Front-End
   
**요청 코드**
```javascript
const petTypes = [
    { value: 1, label: "강아지" },
    { value: 2, label: "고양이" }
]

const productDogCategoeies = [
    { value: 1, label: "홈·리빙" },
    { value: 2, label: "산책" },
    { value: 3, label: "이동" },
    { value: 4, label: "패션" },
    { value: 5, label: "장난감" },
]

const productCatCategoeies = [
    { value: 1, label: "홈·리빙" },
    { value: 2, label: "산책" },
    { value: 3, label: "이동" },
    { value: 5, label: "장난감" },
]

const [ product, setProduct ] = useState({
    productName: "",
    price: 0,
    productDetailText: "",
    productThumbnailUrl: "",
    productDetailUrl: "",
    // default값을 각 옵션들의 defalut값의 value로 맞춰놈
    petTypeId: 1,
    productCategoryId: 1
})

const handleProductSubmitClick = async () => {
    try {
        const option = {
            headers: {
                Authorization: !!localStorage.getItem("accessToken")
                ? localStorage.getItem("accessToken") : ""
            }
        }
        await addProductApi(product, option);
        alert("상품 등록 완료")
        window.location.replace("/admin/product/edit")
    } catch (error) {
        console.error(error);
    }    
}   
```
- 카테고리, 설명, 상품명, 이미지Url 등 필요한 정보를 Body에 담아서 전송한다.
- 사이즈가 여러개 존재하는 카테고리 등록 시, 자동으로 모든 사이즈에 같은 가격이 입력된다. 이 가격은 상품 수정 페이지에서 수정 가능하다.

<br>

```javascript
const handleProductThumnailImgChange = (e) => {
    const file = e.target.files[0];
    setProductThumbnailUrlSrc(file);

    if(file === "") {
        setUploadFiles([]);
        setProductThumbnailUrlSrc("");
        return;
    } 

    setUploadFiles([file]);

    reader.onload = (e) => {
        const productThumnailImageUrl = e.target.result;
        setProductThumbnailUrlSrc(productThumnailImageUrl);

        if(!!uploadFiles) {
            const storageRef = ref(storage, `files/product/${file.name}`);

            uploadBytesResumable(storageRef, file)
            .then((uploadTaskSnapshot) => {
                getDownloadURL(storageRef)
                    .then((downloadUrl) => {
                        setProduct({
                            ...product,
                            productThumbnailUrl: downloadUrl,
                        });
                    });
            });
        }
    }
    reader.readAsDataURL(file);
}

const handleProductDetailImgChange = (e) => {
    const file = e.target.files[0];
    setUploadDetailImgFile(file);

    if(file === "") {
        setUploadFiles([]);
        setProductDetailUrlSrc("");
        return;
    } 

    reader.onload = (e) => {
        const productDetaimgUrl = e.target.result;
        setProductDetailUrlSrc(productDetaimgUrl);

        if(!!uploadFiles) {
            const storageRef = ref(storage, `files/product/${file.name}`);

            uploadBytesResumable(storageRef, file)
            .then((uploadTaskSnapshot) => {
                getDownloadURL(storageRef)
                    .then((downloadUrl) => {
                        setProduct({
                            ...product,
                            productDetailUrl: downloadUrl,
                        });
                    });
            });
        }
    };
    reader.readAsDataURL(file);
}
```
- 이미지 Url은 변경 시 firebase에 업로드 된 후 그 주소를 받아와 Body객체에 저장한다.


<br>

**화면 출력 코드**
```javascript
return (
    <Mypage>
        <div css={S.SContainer}>
            <div css={S.STopTitle}>
                <h2>상품 등록</h2>
            </div>
            <div css={S.SubContainer}>
                <div>
                    <h1 css={S.SH1}>상품 메인 이미지 등록</h1>
                </div>
                <div css={S.SImgBox} >
                    <img src={productThumbnailUrlSrc} alt='상품 메인 이미지'/>
                </div>
                <div css={S.SButtonBox}>
                    <input css={S.Sfile} type="file" onChange={handleProductThumnailImgChange} ref={productThumnailImgRef}/>
                    <button onClick={handleProductThumnailImgUploadClick}>메인 이미지 수정 파일 업로드</button>
                </div>
                <div>
                    <h1 css={S.SH1}>상품 상세 이미지 등록</h1>
                </div>
                <div css={S.SImgBox}>
                    <img src={productDetailUrlSrc} alt='상품 상세 이미지'/>
                </div>
                <div css={S.SButtonBox}>
                    <input css={S.Sfile} type="file" onChange={handleProductDetailImgChange} ref={productDetailImgRef}/>
                    <button onClick={handleProductDetailImgUploadClick}>상품 상세 이미지 파일 업로드</button>
                </div>
                <div>
                    <h1 css={S.SH1}>상품 정보 등록</h1>
                </div>
                <div css={S.SInputBox}>
                    <div css={S.SInfoInput}>
                        <h2>상품명</h2> 
                        <input type="text" 
                            name='productName'
                            placeholder='상품명'
                            onChange={handleInputChange}/>
                    </div>
                    <div css={S.SInfoInput}>
                        <h2>상품 설명</h2>
                        <textarea type="text" 
                            name='productDetailText'
                            placeholder='상품 설명'
                            onChange={handleInputChange}/>
                    </div>
                    <div css={S.SInfoInput}>
                        <h2>동물타입</h2> 
                        <select 
                            options={petTypes}
                            onChange={handlePetTypeOptionChange}
                            css={S.SSelect}>
                            {petTypes.map(type => {
                                return <option key={type.value} value={type.value} label={type.label}>{type.label}</option>
                            })}
                        </select>
                    </div>
                    {product.petTypeId === 1 ? 
                        <div css={S.SInfoInput}>
                            <h2>카테고리</h2>
                            <select
                                options={productDogCategoeies}
                                onChange={handleCategoryTypeOptionChange}
                                css={S.SSelect}>
                                {productDogCategoeies.map(category => {
                                    return <option key={category.value} value={category.value} label={category.label}>{category.label}</option>
                                })}
                            </select> 
                        </div>
                        :
                        <div css={S.SInfoInput}>
                            <h2>카테고리</h2>
                            <select
                                options={productCatCategoeies}
                                onChange={handleCategoryTypeOptionChange}
                                css={S.SSelect}>
                                {productCatCategoeies.map(category => {
                                    return <option key={category.value} value={category.value} label={category.label}>{category.label}</option>
                                })}
                            </select> 
                        </div>
                    }
                    <div css={S.SInfoInput}>
                        <h2>가격</h2>
                        <input type="text" name='price' placeholder='가격' onChange={handleInputChange} />
                        <h4>*사이즈별 가격 설정은 등록 후 수정 페이지에서 수정*</h4>
                    </div>
                </div>
                <div>
                    <button onClick={handleProductSubmitClick} css={S.SButton}>등록하기</button>
                </div>
            </div>
        </div>
    </Mypage>
);
```
- 이미지는 확인을 위해 useState상태를 이용하고 있고, 업로드 데이터가 변경 시 onChange를 이용하여 요청보낼 Body 객체 정보가 갱신된다.

<br>
   


## Back-End
    
**Controller**
```java
@PostMapping("/api/admin/product")
public ResponseEntity<?> addProduct(@RequestBody AddProductReqDto addProductReqDto) {
    return ResponseEntity.ok().body(productService.addProduct(addProductReqDto));
}
```
   <br>

**Service**
```java
@Transactional(rollbackFor = Exception.class)
public boolean addProduct(AddProductReqDto addProductReqDto) {
    try {
        Map<String, Object> map = new HashMap<>();
        ProductMst productMst = addProductReqDto.toEntity();
        productMapper.addProductMaster(productMst);

        map.put("productMstId", productMst.getProductMstId());
        map.put("price", addProductReqDto.getPrice());

        if(addProductReqDto.getProductCategoryId() == 4 && addProductReqDto.getPetTypeId() == 1) {
            map.put("sizeId", 2);
            for(int i = 0; i < 6; i++) {
                productMapper.addProductDetail(map);
                map.replace("sizeId", i + 3);
            }
        }else {
            map.put("sizeId", 1);
            productMapper.addProductDetail(map);
        }
        return true;
    }catch (Exception e) {
        throw new ProductException
                (errorMapper.errorMapper("상품 오류", "상품 추가 중 오류가 발생하였습니다."));
    }
}
```
- 상품의 카테고리 조건에 맞춰 자동으로 사이즈를 정해서 업로드하는 조건문이 들어있다.<br>사이즈 종류가 변경될 일이 없다고 판단되어 이와같이 코드를 작성하였다.
- 변경이 필요하다면 front-end에서 List로 사이즈와 가격정보를 받아오는 방식으로 수정이 가능하다.

<br>

**Repository**
```java
@Options(useGeneratedKeys = true, keyProperty = "productMstId")
public Integer addProductMaster(ProductMst productMst);
public Integer addProductDetail(Map<String, Object> map);
```
- 정규화된 테이블에 모두 정보가 들어가야하기 때문에 상품명, 설명, 이미지 Url과 같은 통합 정보를 Master 테이블에 insert 후<br>useGeneratedKeys를 사용하여 받아온 key를 사용하여 사이즈와 가격 정보를 Detail 테이블에 insert한다.

   <br>

**Mybatis Query**
```java
<insert id="addProductMaster" parameterType="com.woofnmeow.wnm_project_back.entity.ProductMst" useGeneratedKeys="true" keyProperty="productMstId">
    insert into
        product_mst_tb
    values(0, #{productName}, #{petTypeId}, #{productCategoryId}, #{productDetailText}, #{productThumbnailUrl}, #{productDetailUrl}, now())
</insert>



<insert id="addProductDetail" parameterType="hashmap">
    insert into
        product_dtl_tb
    values(0, #{productMstId}, #{price}, #{sizeId})
</insert>
```
- useGeneratedKeys를 사용하여 insert에 사용된 entity객체에 productMstId값을 저장하고 addProductDetail에 사용한다.



  </div>
  </details>







  <details>
  <summary>관리자 상품 관리 목록 페이지 코드 리뷰</summary>
  <div markdown="1">

## 객체
   
**RequestDto**
```java
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SearchMasterProductReqDto {
    private String petTypeName;
    private String productCategoryName;
    private String searchOption;
    private String searchValue;
    private String sortOption;
    private int pageIndex;
}
```
   <br>


**Vo**
```java
@Data
@Builder
public class SearchMasterProductVo {
    private String petTypeName;
    private String productCategoryName;
    private String searchOption;
    private String searchValue;
    private String sortOption;
    private int pageIndex;
    private int limit;
}
```
- limit에 동적값을 할당하기 위한 vo

<br>

```java
@Data
public class GetProductVo {
    private int productMstId;
    private String productName;
    private String productDetailText;
    private String productThumbnailUrl;
    private String productDetailUrl;
    private int petTypeId;
    private String petTypeName;
    private int productCategoryId;
    private String productCategoryName;
    private LocalDateTime createDate;
    private String sizeAndPrice;

    public SearchMasterProductRespDto toRespDto(Map<String, Object> map) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String text = "";
        if(productDetailText != null) {
            text = productDetailText.replaceAll("\n", "<br>");
        }

        String[] sizes = {"no", "XS", "S", "M", "L", "XL", "XXL"};

        for (int i = 0; i < sizes.length; i++) {
            if(map.get(sizes[i]) == null) {
                map.put(sizes[i], "");
            }
        }


        SearchMasterProductRespDto body = SearchMasterProductRespDto.builder()
                .productMstId(productMstId)
                .productName(productName)
                .productDetailText(text)
                .productThumbnailUrl(productThumbnailUrl)
                .productDetailUrl(productDetailUrl)
                .petTypeId(petTypeId)
                .petTypeName(petTypeName)
                .productCategoryId(productCategoryId)
                .productCategoryName(productCategoryName)
                .createDate(createDate.format(formatter))
                .no((String) map.get("no"))
                .XS((String) map.get("XS"))
                .S((String) map.get("S"))
                .M((String) map.get("M"))
                .L((String) map.get("L"))
                .XL((String) map.get("XL"))
                .XXL((String) map.get("XXL"))
                .build();
        return body;
    }
```
- Service에서 가공한 사이즈별 가격을 __문자열__ 형태로 응답한다.
- 문자열이 비어있을 시 해당 사이즈는 상품에 없는 사이즈다.<br> 이것으로 front-end에서 사이즈 유무를 판별한다.

<br>

**ResponseDto**
```java
@Builder
@Data
public class SearchMasterProductRespDto {
    private int productMstId;
    private String productName;
    private int petTypeId;
    private String petTypeName;
    private int productCategoryId;
    private String productCategoryName;
    private String productDetailText;
    private String productThumbnailUrl;
    private String productDetailUrl;
    private String createDate;
    private String no;
    @JsonProperty("XS")
    private String XS;
    @JsonProperty("S")
    private String S;
    @JsonProperty("M")
    private String M;
    @JsonProperty("L")
    private String L;
    @JsonProperty("XL")
    private String XL;
    @JsonProperty("XXL")
    private String XXL;
}
```
   <br>

   
## Front-End
   
**요청 코드**
```javascript
const [ searchData, setSearchData ] = useState({
    petTypeName: "all",
    productCategoryName: "all",
    searchOption: 'name',
    searchValue: '',
    sortOption: 'number',
    pageIndex: 1});


const getProducts = useQuery(["getProducts"], async () => {
    const response = await getProductsApi(searchData);
    return response;
},
{
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: response => {
        setOldSearchData(searchData)
        setProductList(response?.data)
    }
});


const getProductCount = useQuery(["getProductCount"], async () => {
    try {
        const response = getProductsCountApi(searchData);
        return response;
    } catch (error) {
        alert(error.message)
    }
},{
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: response => {
        const respLastPage = getLastPage(response?.data, 10);
        setLastPage(respLastPage)
        const respStartIndex = getStartIndex(currentPage)
        setStartIndex(respStartIndex)
        const respEndIndex = getEndIndex(respStartIndex, respLastPage);
        setEndIndex(respEndIndex)
        const respTotalPageIndex = getTotalPageIndex(respStartIndex, respEndIndex)
        setTotalPageIndex(respTotalPageIndex)
    }
}) 
```
- 검색 조건에 일치하는 상품 정보와 상품의 갯수를 가져오는 요청<br>해당 요청으로 응답받은 객체에는 모든 사이즈에 대한 가격 정보가 들어있다.

<br>

**화면 출력 코드**
```javascript
return (
    <Mypage>
        <div css={S.SContainer}>
            <div css={S.STopTitle}>
                <h2>상품 관리</h2>
            </div>
            <div css={S.SSelectBox}>
                <button onClick={() => { navigate("/admin/incoming")}}>입고 관리</button>
                <button onClick={() => { navigate("/admin/outgoing")}}>출고 관리</button>
                <select option={petType} onChange={handleSearchSelectChange} name='petTypeName'>
                    {petType?.map(pt => {
                        return <option key={pt.value} label={pt.label} value={pt.value} />
                    })}
                </select>
                <select option={category} onChange={handleSearchSelectChange} name='productCategoryName'>
                    {category?.map(ct => {
                        return <option key={ct.value} label={ct.label} value={ct.value}/>
                    })}
                </select>
                <select option={sortOption} onChange={handleSearchSelectChange} name='sortOption'>
                    {sortOption?.map(so => {
                        return <option key={so.value}  label={so.label} value={so.value}/>
                    })}
                </select>
                <select option={searchOption} onChange={handleSearchSelectChange} name='searchOption'>
                    {searchOption?.map(op => {
                        return <option key={op.value} label={op.label} value={op.value}/>
                    })}
                </select>

                <input type='text' value={searchInput} onKeyDown={handleOnKeyPress} onChange={handleSearchInputChange}/>
                <button onClick={handleSearchClick}>검색</button>
            </div>
            <div css={S.STableBox}>
                <table css={S.STable}>
                    <thead>
                        <tr css={S.SThBox}>
                            <th>상품 번호</th>
                            <th>상품 이미지</th>
                            <th>상품 명</th>
                            <th>동물 종류</th>
                            <th>카테고리</th>
                            <th>상품 조회</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList?.map(product => {
                            return <tr key={product.productMstId} css={S.STdBox}>
                                <td>{product.productMstId}</td>
                                <td>
                                    <img css={S.SImg} src={product.productThumbnailUrl} alt="" />
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.petTypeName}</td>
                                <td>{product.productCategoryName}</td>
                                <td>
                                    <button css={S.SSelectButton} onClick={()=>handleNavigateJoinProductDetailPageClick(product.productMstId)}>상세 조회</button>
                                </td>
                                <td>
                                    <button css={S.SEditButton} onClick={()=>handleEditProductClick(product.productMstId)}>수정</button>
                                </td>
                                <td >
                                    <button css={S.SDeleteButton} onClick={()=>handleRemoveProductClick(product.productMstId)}>삭제</button>  
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div css={S.SPageButtonBox}>
                <button
                    onClick={() => handlePageClick(searchData.pageIndex - 1)}
                    disabled={currentPage === 1}
                    >
                        {"<"}
                </button>

                {totalPageIndex.map((page, index) => (
                    <button 
                        css={currentPage === page ? S.selectedPageButton : S.PageButton}
                        name="totalPageIndex"
                        onClick={() => handlePageClick(page)}
                        key={index}>
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => handlePageClick(searchData.pageIndex + 1)}
                    disabled={currentPage === lastPage}
                    >
                        {">"}
                </button>
            </div>
        </div>
    </Mypage>
);
```
- 목록에서 확인 해야하는 기본적인 정보들과 입/출고, 상세정보 확인 페이지, 수정 페이지로 이동하는 버튼과 삭제 요청을 보내는 버튼이 구현되어있다.

<br>

**기타**
```javascript
const petType = [
    { value: "all", label: "전부"},
    { value: "dog", label: "강아지"},
    { value: "cat", label: "고양이"}
]
const category = [
    { value: "all", label: "전부" },
    { value: "home-living", label: "홈·리빙" },
    { value: "walk", label: "산책" },
    { value: "movement", label: "이동" },
    { value: "fashion", label: "패션" },
    { value: "toy", label: "장난감" }
]

const searchOption = [
    { value: "name", label: "제목"},
    { value: "number", label: "마스터아이디"}
]

const sortOption = [
    { value: "name", label: "상품명"},
    { value: "number", label: "상품번호"},
]

useEffect(() => {
    if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
        alert("정상적인 접근이 아닙니다.")
        navigate("/")
    }
}, [])
```
- 검색 옵션들과 Admin이 아닐 시 접근을 차단하는 코드

<br>

```javascript
const handleRemoveProductClick = async (productMstId) => {
    try {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        if(window.confirm("정말로 해당 상품을 삭제 하시겠습니까?")) {
            await removeProductApi(productMstId, option)
            alert("상품이 삭제되었습니다.")
            getProducts.refetch();
        } else {
            alert("취소 되었습니다.")
        }
    } catch (error) {
        console.log(error)
    }
}
```
- 상품 삭제를 클릭 시 해당 상품의 Id로 삭제 요청 전송 후 useQuery를 갱신시키는 코드

  <br>

   
## Back-End

**Controller**
```java
@GetMapping("api/products/sizes")
public ResponseEntity<?> searchProductsWithAllSizes(SearchMasterProductReqDto searchMasterProductReqDto) {
    return ResponseEntity.ok().body(productService.searchProductsWithAllSizes(searchMasterProductReqDto));
}

@GetMapping("api/products/count")
public ResponseEntity<?> getCountOfSearchedProducts(SearchMasterProductReqDto searchMasterProductReqDto) {
    System.out.println(searchMasterProductReqDto);
    return ResponseEntity.ok().body(productService.getCountOfSearchedProducts(searchMasterProductReqDto));
}

@DeleteMapping("/api/admin/product/{productMstId}")
public ResponseEntity<?> removeProduct(@PathVariable int productMstId) {
    return ResponseEntity.ok().body(productService.removeProduct(productMstId));
}
```

   <br>

**Service**
```java
public List<SearchMasterProductRespDto> searchProductsWithAllSizes(SearchMasterProductReqDto searchMasterProductReqDto) {
    try {
        List<GetProductVo> getProductVo = productMapper.searchProductsWithAllSizes(searchMasterProductReqDto.toVo());
        Map<String, Object> map = new HashMap<>();
        List<SearchMasterProductRespDto> reqList= new ArrayList<>();
        getProductVo.forEach(vo -> {
            String allSizeAndPrice = vo.getSizeAndPrice();
            String[] sizeAndPrice = allSizeAndPrice.split(", ");
            for (int i = 0; i < sizeAndPrice.length; i++) {
                String[] sizes = sizeAndPrice[i].split("/ ", 0);
                String[] prices = sizeAndPrice[i].split("/ ", 1);
                String size = sizes[0].substring(1);
                String price = prices[0].substring(prices[0].indexOf("/ ") + 2).replace(")", "");
                map.put(size, price.toString());
            }
            reqList.add(vo.toRespDto(map));
        });
        return reqList;
    }catch (Exception e) {
        throw new ProductException
                (errorMapper.errorMapper("상품 오류", "상품 검색 중 오류가 발생하였습니다."));
    }
}


public int getCountOfSearchedProducts(SearchMasterProductReqDto searchMasterProductReqDto) {
    try {
        return productMapper.selectCountOfSearchedProducts(searchMasterProductReqDto.toSearchProduct());
    }catch (Exception e) {
        throw new ProductException
                (errorMapper.errorMapper("상품 오류", "상품 리스트를 불러오는 중 오류가 발생하였습니다."));
    }
}


@Transactional(rollbackFor = Exception.class)
public boolean removeProduct(int productMstId) {
    try {
        return productMapper.deleteProduct(productMstId) > 0;
    }catch (Exception e) {
        throw new ProductException
                (errorMapper.errorMapper("상품 오류", "상품 삭제 중 오류가 발생하였습니다."));
    }
}
```
- 위에서부터 상품 정보를 가져오는 기능, 상품의 갯수를 가져오는 기능, 상품을 삭제하는 기능이다.
- 상품 정보를 가져오면서 문자열로 나눠진 데이터 형태를 substring을 활용하여 key, value 형태로 분류하여 응답한다.

   <br>

**Repository**
```java
public List<GetProductVo> searchProductsWithAllSizes(SearchMasterProductVo searchMasterProductVo);
public Integer selectCountOfSearchedProducts(SearchMasterProductVo searchMasterProductVo);
public Integer deleteProduct(int productMstId);
```
   <br>

**Mybatis Query**
```java
<select id="searchProductsWithAllSizes" resultMap="productsWithAllSizesMap">
    select
        pmt.product_mst_id,
        pmt.product_name,
        ptt.pet_type_id,
        ptt.pet_type_name,
        pct.product_category_id,
        pct.product_category_name,
        pmt.product_thumbnail_url,
        pmt.product_detail_text,
        pmt.product_detail_url,
        pmt.create_date,
        GROUP_CONCAT(CONCAT('(', st.size_name, '/ ', pdt.price, ')') SEPARATOR ', ') AS sizes_and_prices
    from
        product_mst_tb pmt
        left outer join product_dtl_tb pdt on(pdt.product_mst_id = pmt.product_mst_id)
        left outer join size_tb st on(st.size_id = pdt.size_id)
        left outer join pet_type_tb ptt on(ptt.pet_type_id = pmt.pet_type_id)
        left outer join product_category_tb pct on(pct.product_category_id = pmt.product_category_id)
    where
        1 = 1
    <choose>
        <when test="searchOption.equals('number')">
            <if test="!searchValue.equals('')">
                and pmt.product_mst_id = #{searchValue}
            </if>
        </when>
        <when test="searchOption.equals('name')">
            and pmt.product_name like concat("%", #{searchValue}, "%")
        </when>
        <otherwise>
            and (pmt.product_name like concat("%", #{searchValue}, "%")
            or pct.product_category_name like concat("%", #{searchValue}, "%")
            or ptt.pet_type_name like concat("%", #{searchValue}, "%"))
        </otherwise>
    </choose>
    <if test="!petTypeName.equals('all')">
        and ptt.pet_type_name_eng = #{petTypeName}
    </if>
    <if test="!productCategoryName.equals('all')">
        and pct.product_category_name_eng = #{productCategoryName}
    </if>
    group by
        pmt.product_mst_id
    order by
    <choose>
        <when test="sortOption.equals('name')">
            pmt.product_name COLLATE utf8mb4_unicode_ci
        </when>
        <when test="sortOption.equals('number')">
            pmt.product_mst_id desc
        </when>
        <otherwise>
            pmt.product_mst_id desc
        </otherwise>
    </choose>
    limit
    #{pageIndex}, #{limit}
</select>


<select id="selectCountOfSearchedProducts" parameterType="com.woofnmeow.wnm_project_back.vo.SearchMasterProductVo" resultType="java.lang.Integer">
    select
        count(*)
    from
        product_mst_tb pmt
        left outer join pet_type_tb ptt on(ptt.pet_type_id = pmt.pet_type_id)
        left outer join product_category_tb pct on(pct.product_category_id = pmt.product_category_id)
    where
        1 = 1
    <choose>
        <when test="searchOption.equals('number')">
            <if test="!searchValue.equals('')">
                and pmt.product_mst_id = #{searchValue}
            </if>
        </when>
        <when test="searchOption.equals('name')">
            and pmt.product_name like concat("%", #{searchValue}, "%")
        </when>
        <otherwise>
            and (pmt.product_name like concat("%", #{searchValue}, "%")
            or pct.product_category_name like concat("%", #{searchValue}, "%")
            or ptt.pet_type_name like concat("%", #{searchValue}, "%"))
        </otherwise>
    </choose>
    <if test="!petTypeName.equals('all')">
        and ptt.pet_type_name_eng = #{petTypeName}
    </if>
    <if test="!productCategoryName.equals('all')">
        and pct.product_category_name_eng = #{productCategoryName}
    </if>
</select>


<delete id="deleteProduct">
    delete
    from
    product_mst_tb
    where
    product_mst_id = #{productMstId}
</delete>
```
- 다수의 사이즈를 하나의 객체에 담아오기 위해 GROUP_CONCAT을 사용하여 "(key/ value), (key/ value)"형태의 문자열로 select 하였다. <br>해당 문자열은 Service에서 가공하여 일반적인 Body형태로 변환하여 응답한다.


  </div>
  </details>






  <details>
  <summary>관리자 상품 수정 페이지 코드 리뷰</summary>
  <div markdown="1">

  ## 객체

   ### 정보를 받아오는 객체는 관리자 상품 관리 목록 페이지와 동일하게 사용한다.

<br>
   
**RequsetDto**
```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EditProductReqDto {
    private String productName;
    private String productDetailText;
    private String productThumbnailUrl;
    private String productDetailUrl;

    // 사이즈별 가격
    @JsonProperty("no")
    private String no;
    @JsonProperty("XS")
    private String XS;
    @JsonProperty("S")
    private String S;
    @JsonProperty("M")
    private String M;
    @JsonProperty("L")
    private String L;
    @JsonProperty("XL")
    private String XL;
    @JsonProperty("XXL")
    private String XXL;
}
```


   <br>

## Front-End
   
**요청 코드**
```javascript
const productMstId = params.productMstId

const searchData = {
    petTypeName: "all",
    productCategoryName: "all",
    searchOption: 'number',
    searchValue: parseInt(productMstId),
    sortOption: 'number',
    pageIndex: 1}

const getProduct = useQuery(["getProduct"], async () => {
    const response = await getProductsApi(searchData);
    return response;
},
{
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: response => {
        setProductThumbnailSrc(response?.data[0]?.productThumbnailUrl)
        setProductDetailImgSrc(response?.data[0]?.productDetailUrl);
        setProductData({
            productName: response?.data[0].productName,
            productDetailText: response?.data[0].productDetailText,
            productThumbnailUrl: response?.data[0].productThumbnailUrl,
            productDetailUrl: response?.data[0].productDetailUrl,
            no: response?.data[0].no,
            XS: response?.data[0].XS,
            S: response?.data[0].S,
            M: response?.data[0].M,
            L: response?.data[0].L,
            XL: response?.data[0].XL,
            XXL: response?.data[0].XXL,
        })

        for(let j = 0; j < response?.data.length; j++) {
            const numbers = [parseInt(response?.data[j].no), parseInt(response?.data[j].XS), parseInt(response?.data[j].S), parseInt(response?.data[j].M), parseInt(response?.data[j].L), parseInt(response?.data[j].XL), parseInt(response?.data[j].XXL)]
            const nums = [];
    
            for(let i = 0; i < numbers.length; i++) {
                if(isNaN(numbers[i])) {
                    numbers[i] = 0;
                }
                if(numbers[i] !== 0) {
                    nums.push(parseInt(numbers[i]))
                }
            }
            let lastNum = nums[0]
            for(let i = 0; i < nums.length; i++) {
                if(lastNum > nums[i]) {
                    lastNum = nums[i]
                }
            }
            productMinimumData.push({
                productName: response?.data[j].productName,
                productDetailText: response?.data[j].productDetailText,
                productThumbnailUrl: response?.data[j].productThumbnailUrl,
                productDetailUrl: response?.data[j].productDetailUrl,
                no: response?.data[j].no,
                XS: response?.data[j].XS,
                S: response?.data[j].S,
                M: response?.data[j].M,
                L: response?.data[j].L,
                XL: response?.data[j].XL,
                XXL: response?.data[j].XXL,
            })

        }
}
})
```
- params에서 key를 받아 상품 목록 정보를 받아오는 검색 객채를 재활용하여 요청을 보낸다.<br> 검색 객체를 보내지만 해당 페이지에 검색 기능은 없으므로 페이지 최초 로딩 시 한번만 요청이 일어난다.

<br>

**화면 출력 코드**
```javascript
return (
    <Mypage>
        <div css={S.SContainer}>
            <div css={S.STopTitle}>
                <h2>상품 정보 수정</h2>
            </div>
                <div css={S.SubContainer}>
                    <div>
                        <h1 css={S.SH1}>상품 메인 이미지 수정</h1>
                    </div>
                    <div css={S.SImgBox}> 
                        <img src={productThumbnailSrc} alt='상품 메인 이미지' onChange={handleProductDataOnChange}/>
                    </div>
                    <div css={S.SButtonBox}>

                        <input type="file" css={S.SFile} ref={productThumnailImgRef} onChange={handleThumbnailChange}/>
                        <button onClick={handleProductThumnailImgUploadClick}>메인 이미지 수정 파일 업로드</button>
                    </div>
                    <div>
                        <h1 css={S.SH1}>상품 상세 이미지 수정</h1>
                    </div>
                    <div css={S.SImgBox}>
                        <img src={productDetailImgSrc} alt='상품 상세 이미지' width={'700px'} onChange={handleProductDataOnChange}/>
                    </div>
                    <div css={S.SButtonBox}>

                        <input type="file" css={S.SFile} onChange={handleDetailImgChange} ref={productDetailImgRef}/>
                        <button onClick={handleProductDetailImgUploadClick}>상세 이미지 수정 파일 업로드</button>
                    </div>
                    <div>
                        <h1 css={S.SH1}>상품 정보 수정</h1>
                    </div>

                    <div css={S.SInformation}>
                        <div css={S.SInfoNameInput}>
                            <h2>상품명</h2>
                            <input type="text" 
                                name='productName' 
                                value={productData.productName} 
                                onChange={handleProductDataOnChange}/>
                        </div>
                        <div css={S.SInfoTextInput}>
                            <h2>상품 설명</h2>
                            <textarea type="text" 
                                name='productDetailText' 
                                value={productData.productDetailText} 
                                onChange={handleProductDataOnChange}/>
                        </div>
                        <div css={S.SInfoSizeInput}>
                            <h2>사이즈별 가격</h2> 
                            <ul>
                            {productData.no === "" ?
                                <>
                                    <li>
                                        <label>XS</label>
                                        <input value={productData.XS} 
                                                type='text' 
                                                name='XS' 
                                                onChange={handleProductDataOnChange}/>
                                    </li>
                                    <li>
                                        <label>S</label>
                                        <input value={productData.S} 
                                                type='text' 
                                                name='S' 
                                                onChange={handleProductDataOnChange}/>
                                    </li>
                                    <li>
                                        <label>M</label>
                                        <input value={productData.M} 
                                                type='text' 
                                                name='M' 
                                                onChange={handleProductDataOnChange}/>
                                    </li>
                                    <li>
                                        <label>L</label>
                                        <input value={productData.L} 
                                                type='text' 
                                                name='L' 
                                                onChange={handleProductDataOnChange}/>
                                    </li>
                                    <li>
                                        <label>XL</label>
                                        <input value={productData.XL} 
                                                type='text' 
                                                name='XL' 
                                                onChange={handleProductDataOnChange}/>
                                    </li>
                                    <li>
                                        <label>XXL</label>
                                        <input value={productData.XXL} 
                                                type='text' 
                                                name='XXL' 
                                                onChange={handleProductDataOnChange}/>
                                    </li>
                                </> :
                                <>
                                    <li>
                                        <label>NO SIZE</label>
                                        <input value={productData.no} 
                                                type='text' 
                                                name='no' 
                                                onChange={handleProductDataOnChange}/>
                                    </li>
                                </>}
                            </ul>
                        </div>
                    </div>
                <div >
                    <button css={S.SSubmit}onClick={handleUpdateSubmit} >등록하기</button>
                </div>
            </div>
        </div>
    </Mypage>
);
```
- 사이즈가 없는 제품과 사이즈별로 가격이 나뉘는 제품을 구분하여 가격 정보를 수정할 수 있는 Input창을 다르게 표시해주도록 코드를 작성하였다.
- 각 정보를 수정 시 onChange를 통해 요청데이터의 최신화가 이뤄지도록 코드를 작성하였다.

<br>

**기타**
```javascript
useEffect(() => {
    if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
        alert("정상적인 접근이 아닙니다.")
        navigate("/")
    }
}, [])

const handleUpdateSubmit = async () => {
    try {
        if(!!productThumbnailFile) {
            const thumbnailStorageRef = ref(storage, `files/product/${productThumbnailFile?.name}`);
            await uploadBytesResumable(thumbnailStorageRef, productThumbnailFile);
            const downLoadURL = await getDownloadURL(thumbnailStorageRef);
            productData.productThumbnailUrl = downLoadURL;
        }

        if(!!productDetailImgFile) {
            const detailImgStorageRef = ref(storage, `files/product/${productDetailImgFile?.name}`);
            await uploadBytesResumable(detailImgStorageRef, productDetailImgFile);
            const downLoadURL = await getDownloadURL(detailImgStorageRef);
            productData.productDetailUrl = downLoadURL
        }

        await updateProductApi(productMstId, productData, option);
        alert("수정이 완료되었습니다.")
        window.location.replace("/admin/product/edit")
    }catch(error) {
        console.log(error.response.data)
    }
}
```
- 관리자가 아니라면 접근을 차단하는 코드
- 수정 버튼을 클릭 시, firebase에 업로드 후 해당 Url을 받아서 요청 객체에 담는다. 그 후 Back-end로 요청을 전송한다.

<br>
   
## Back-End

**Controller**
```java
@PutMapping("/api/admin/product/{productMstId}")
public ResponseEntity<?> editProduct(@PathVariable int productMstId, @RequestBody EditProductReqDto editProductReqDto) {
    return ResponseEntity.ok().body(productService.editProduct(productMstId, editProductReqDto));
}
```

   <br>

**Service**
```java
@Transactional(rollbackFor = Exception.class)
public boolean editProduct(int productMstId, EditProductReqDto editProductReqDto) {
    try {
        Map<String, Object> mstReqMap = new HashMap<>();
        mstReqMap.put("productMstId", productMstId);
        mstReqMap.put("productName", editProductReqDto.getProductName());
        mstReqMap.put("productDetailText", editProductReqDto.getProductDetailText());
        mstReqMap.put("productThumbnailUrl", editProductReqDto.getProductThumbnailUrl());
        mstReqMap.put("productDetailUrl", editProductReqDto.getProductDetailUrl());
        productMapper.updateProductMst(mstReqMap);


        if(editProductReqDto.getNo().equals("")) {
            Map<String, Integer> dtlReqMap = new HashMap<>();
            dtlReqMap.put("2", Integer.parseInt(editProductReqDto.getXS()));
            dtlReqMap.put("3", Integer.parseInt(editProductReqDto.getS()));
            dtlReqMap.put("4", Integer.parseInt(editProductReqDto.getM()));
            dtlReqMap.put("5", Integer.parseInt(editProductReqDto.getL()));
            dtlReqMap.put("6", Integer.parseInt(editProductReqDto.getXL()));
            dtlReqMap.put("7", Integer.parseInt(editProductReqDto.getXXL()));

            for (Map.Entry<String, Integer> entry : dtlReqMap.entrySet()) {
                int sizeId = Integer.parseInt((String) entry.getKey());
                Integer price = entry.getValue();
                productMapper.updateProductDtl(productMstId, sizeId, price);
            }
        }else {
            productMapper.updateProductDtl(productMstId, 1, Integer.parseInt(editProductReqDto.getNo()));
        }
        return true;
    }catch (Exception e) {
        throw new ProductException
                (errorMapper.errorMapper("상품 오류", "상품 정보 수정 중 오류가 발생하였습니다."));
    }
}
```
- 요청 Body에 비어있는 객체를 확인하여 사이즈가 있는 상품인지 없는 상품인지 구분하여 데이터를 업데이트한다.
- 사이즈 Id를 직접 key에 입력해줘아햐는 한계가 있어 수정이 필요해보인다.

   <br>

**Repository**
```java
public Integer updateProductMst(Map<String, Object> map);
public Integer updateProductDtl(int productMstId, int sizeId, int price);
```

   <br>

**Mybatis Query**
```java
<update id="updateProductMst" parameterType="hashmap">
    update
        product_mst_tb
    set
        product_name = #{productName},
        product_detail_text = #{productDetailText},
        product_thumbnail_url = #{productThumbnailUrl},
        product_detail_url = #{productDetailUrl}
    where
        product_mst_id = #{productMstId}
</update>



<update id="updateProductDtl" parameterType="hashmap">
    update
        product_dtl_tb
    set
        price = #{price}
    where
        product_mst_id = #{productMstId}
        and size_id = #{sizeId}
</update>
```

  </div>
  </details>







  <details>
  <summary>관리자 상품 상세 정보 조회 페이지 코드 리뷰</summary>
  <div markdown="1">

## 객체
   
**ResponseDto**
```java
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductMst {
    private int productMstId;
    private String productName;
    private int petTypeId;
    private int productCategoryId;
    private String productDetailText;
    private String productThumbnailUrl;
    private String productDetailUrl;
    private LocalDateTime createDate;

    private PetType petType;
    private Category category;
    private List<ProductDtl> productDtlList;
}

@Data
public class PetType {
    private int petTypeId;
    private String petTypeName;
}

@Data
public class Category {
    private int productCategoryId;
    private String productCategoryName;
}


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDtl {
    private int productDtlId;
    private int productMstId;
    private int price;
    private int sizeId;
    private int actualStock;
    private int tempStock;

    private Size size;
    private ProductMst productMst; // 빈 데이터로 전송된다.
}

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Size {
    private int sizeId;
    private String sizeName;
}
```

   <br>
   
## Front-End
   
**요청 코드**
```javascript
const param = useParams()
const productMstId = parseInt(param.productMstId)

const getProduct = useQuery(["getProduct"], () => {
    return getProductMstApi(productMstId);
},{
    refetchOnWindowFocus: false,
    retry: 0
})
```
- params에 있는 Id를 사용하여 요청을 전송한다.

<br>

**화면 출력 코드**
```javascript
return (
    <Mypage>
        <div css={S.SContainer}>
            <div css={S.STopTitle}>
                <h2>상품 상세 정보</h2>
            </div>
            <div css={S.SSubTitleBox}>
                <h3>상품 정보</h3>
                <button onClick={handleReturnToEditPageClick}>전체 상품 리스트</button>
            </div>
            <div css={S.STableBox}>
                <table css={S.SToptable}>
                    <tbody>
                    <tr css={S.SThtdBox}>
                        <th>상품 추가 일자</th>
                        <td>{getProduct?.data?.data.createDate}</td>
                    </tr>
                    <tr css={S.SThtdBox}>
                        <th>상품 이름</th>
                        <td>{getProduct?.data?.data.productName}</td>
                    </tr>
                    <tr css={S.SThtdBox}>
                        <th>상품 설명</th>
                        <td>{getProduct?.data?.data.productDetailText}</td>
                    </tr>
                    <tr css={S.SThtdBox}>
                        <th>동물 종류 이름[ID]</th>
                        <td>{getProduct?.data?.data.petTypeName}[{getProduct?.data?.data.petTypeId}]</td>
                    </tr>
                    <tr css={S.SThtdBox}>
                        <th>카테고리 이름[ID]</th>
                        <td>{getProduct?.data?.data.productCategoryName}[{getProduct?.data?.data.productCategoryId}]</td>
                    </tr>
                    <tr css={S.SThtdBox}>
                        <th>상품 마스터 ID</th>
                        <td>{productMstId}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div css={S.SSubTitleBox}>
                <h3>상품 사이즈별 정보</h3>
            </div>
            <div css={S.STableBox}>
                {getProduct?.data?.data.productDtlList?.map(dtl => {
                return <table key={dtl.productDtlId} css={S.SBottomTable}>
                    <tbody>
                        <tr css={S.SThtdBox}>
                            <th>상품 상세(사이즈별) ID</th>
                            <td>{dtl.productDtlId}</td>
                        </tr>
                        <tr css={S.SThtdBox}>
                            <th>가격</th>
                            <td>{dtl.price}</td>
                        </tr>
                        <tr css={S.SThtdBox}>
                            <th>사이즈[사이즈ID]</th>
                            <td>{dtl.size.sizeName}[{dtl.sizeId}]</td>
                        </tr>
                        <tr css={S.SThtdBox}>
                            <th>실제 재고</th>
                            <td>{dtl.actualStock}</td>
                        </tr>
                        <tr css={S.SThtdBox}>
                            <th>임시 재고(실제 재고 - 주문재고)</th>
                            <td>{dtl.tempStock}</td>
                        </tr>
                    </tbody>
                </table>
                })}
            </div>
            <div css={S.SImgContainer}>
                <div>
                    <h2 css={S.SH2}>상품 메인 이미지</h2>
                </div>
                <div>
                    <img src={getProduct?.data?.data.productThumbnailUrl} alt='' width={'700px'}/>
                </div>
                <div css={S.SMidBox}>
                    <h3>상품 메인 이미지 URL</h3>
                    <div>{getProduct?.data?.data.productThumbnailUrl}</div>
                </div>
                <div>
                    <h2 css={S.SH2}>상품 상세 정보 이미지</h2>
                </div>
                <div>
                    <img src={getProduct?.data?.data.productDetailUrl} alt='' width={'700px'}/>
                </div>
                <div css={S.SMidBox}>
                    <h3>상품 상세 정보 이미지 URL</h3>
                    <div>{getProduct?.data?.data.productDetailUrl}</div>
                </div>
                <button css={S.SButton} onClick={handleReturnToEditPageClick}>전체 상품 리스트</button>
            </div>

        </div>
    </Mypage>
);
```
- 관리자가 상품에 대한 모든 정보를 확인하는 페이지이므로 카테고리 ID와 같은 상세한 정보까지 모두 화면에 출력한다.

<br>
   
## Back-End

**Controller**
```java
@GetMapping("/api/product/master/{productMstId}")
public ResponseEntity<?> getProductByProductMstId(@PathVariable int productMstId) {
    return ResponseEntity.ok().body(productService.getProductByProductMstId(productMstId));
}
```
   <br>

**Service**
```java
public GetProductRespDto getProductByProductMstId(int productMstId) {
    try {
        return productMapper.selectProductByProductMstId(productMstId).toProductRespDto();
    }catch (Exception e) {
        throw new ProductException(errorMapper.errorMapper
                ("상품 오류", "상품 정보 조회 중 오류가 발생하였습니다."));
    }
}
```
   <br>

**Repository**
```java
public ProductMst selectProductByProductMstId(int productMstId);
```
   <br>

**Mybatis Query**
```java
<resultMap id="productMstMap" type="com.woofnmeow.wnm_project_back.entity.ProductMst">
    <id property="productMstId" column="product_mst_id" />
    <result property="productName" column="product_name" />
    <result property="petTypeId" column="pet_type_id" />
    <result property="productCategoryId" column="product_category_id" />
    <result property="productDetailText" column="product_detail_text" />
    <result property="productThumbnailUrl" column="product_thumbnail_url" />
    <result property="productDetailUrl" column="product_detail_url" />
    <result property="createDate" column="create_date" />
    <association property="petType" resultMap="petTypeMap"/>
    <association property="category" resultMap="categoryMap"/>
    <collection property="productDtlList" javaType="list" resultMap="productDtlMap"/>
</resultMap>

<resultMap id="productDtlMap" type="com.woofnmeow.wnm_project_back.entity.ProductDtl">
    <id property="productDtlId" column="product_dtl_id" />
    <result property="productMstId" column="product_mst_id" />
    <result property="price" column="price" />
    <result property="sizeId" column="size_id" />
    <result property="actualStock" column="actual_stock" />
    <result property="tempStock" column="temp_stock" />
    <association property="size" resultMap="sizeMap" />
</resultMap>

<resultMap id="sizeMap" type="com.woofnmeow.wnm_project_back.entity.Size">
    <id property="sizeId" column="size_id"/>
    <result property="sizeName" column="size_name"/>
</resultMap>

<resultMap id="petTypeMap" type="com.woofnmeow.wnm_project_back.entity.PetType">
    <id property="petTypeId" column="pet_type_id"/>
    <result property="petTypeName" column="pet_type_name"/>
</resultMap>

<resultMap id="categoryMap" type="com.woofnmeow.wnm_project_back.entity.Category">
    <id property="productCategoryId" column="product_category_id"/>
    <result property="productCategoryName" column="product_category_name"/>
</resultMap>
```

   <br>

**Mybatis Query**
```java
<select id="selectProductByProductMstId" resultMap="productMstMap">
    select
        pdt.product_dtl_id,
        pmt.product_mst_id,
        pmt.product_name,
        pdt.price,
        ptt.pet_type_id,
        ptt.pet_type_name,
        pct.product_category_id,
        pct.product_category_name,
        st.size_id,
        st.size_name,
        pmt.product_detail_text,
        pmt.product_thumbnail_url,
        pmt.product_detail_url,
        psv.actual_stock,
        psv.temp_stock,
        pmt.create_date
    from
        product_mst_tb pmt
        left outer join  product_dtl_tb pdt on(pdt.product_mst_id = pmt.product_mst_id)
        left outer join product_category_tb pct on(pct.product_category_id = pmt.product_category_id)
        left outer join pet_type_tb ptt on(ptt.pet_type_id = pmt.pet_type_id)
        left outer join size_tb st on(st.size_id = pdt.size_id)
        left outer join product_stock_view psv on(psv.product_dtl_id = pdt.product_dtl_id)
    where
        pmt.product_mst_id = #{productMstId}
</select>
```

   <br>

  </div>
  </details>
<br/>
  
<br/>

### **공지사항 페이지**
  <details>
  <summary>공지사항 페이지 영상</summary>
  <div markdown="1">

![공지사항 페이지](https://github.com/KoreaIt-J-23-2-3/wnm_project_portfolio/assets/137989661/7d0a4b2e-487f-4b12-b05a-6091bb30d2f4)

  </div>
  </details>

  <details>
  <summary>공지사항 페이지 코드리뷰</summary>
  <div markdown="1">

## Front-End
**전체 공지사항 페이지**
```javascript
	const [ announcementsList, setAnnouncementsList ] = useState([]);
	const [ announcementsCount, setAnnouncementsCount ] = useState([]);
	const [ searchData, setSearchData ] = useState({
		petTypeName: "all",
		productCategoryName: "all",
		searchOption: 'all',
		searchValue: '',
		sortOption: 'number',
		pageIndex: 1});
			
	const getAnnouncements = useQuery(["getAnnouncements"], async () => {
		try {
				const response = await getAnnouncementsApi();
				return  response;
		} catch (error) {
				console.log(error)
		}   
	},{
		retry: 0,
		onSuccess: response => {
				setAnnouncementsList(response?.data);
		}
	})

	const getAnnouncementsCount = useQuery(["getAnnouncementsCount"], async () => {
		try {
				const response = await getAnnouncementsCountApi();
				return  response;
		} catch (error) {
				console.log(error)
		}   
	},{
		retry: 0,
		onSuccess: response => {
				setAnnouncementsCount(response?.data);
		}
	})

	const handleAnnouncementClick = (announcementId) => {
		navigate(`/notice/${announcementId}`)
	}
```
- getAnnouncements 리엑트쿼리로 공지사항 리스트를 가져옴, 데이터를 가져오는데 성공하면 announcementsList상태에 데이터를 저장
- getAnnouncementsCount 리엑트 쿼리로 페이지네이션에 필요한 공지사항의 전체 갯수를 가져옴
- 전체 공지사항에서 특정 공지사항을 클릭하면 announcementId를 가지고 이동
<br>

**공지사항 작성**
```javascript
	const [ announcementData, setAnnouncementData ]= useState({
		title: "",
		content: "",
		type: "공지사항",
		isPinned: 0,
		createDate: ""
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setAnnouncementData({
				...announcementData,
				[name]: value
		})
	}

	const handleCheckBoxChange = (e) => {
		setAnnouncementData({
				...announcementData,
				isPinned: announcementData.isPinned === 0 ? 1 : 0
		});
	}

	useEffect(() => {
		if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
				alert("정상적인 접근이 아닙니다.")
				navigate("/")
		}
	}, [])

	const handleWriteClick = async () => {
		try {
				const option = {
						headers: {
								Authorization: localStorage.getItem("accessToken")
						}
				}
				const response = await writeAnnouncementApi(announcementData, option)
		
				alert("등록이 완료되었습니다.")
				navigate("/notice")
				return response;
		} catch (error) {
				alert(error)
		}
	}
```
- isPinned의 경우 작성 시 전체 공지사항에서 상단에 고정 여부를 체크박스를 통해 선택가능
- useEffect를 통해 관리자 권한이 없는 사용자가 접근 할 경우 홈 화면으로 돌려보내줍니다
- type의 경우 카테고리가 늘어날 경우를 대비하여 작
<br>

**공지사항 상세페이지**
```javascript
	const [ announcementData, setAnnouncementData ] = useState();

	const getAnnouncementById = useQuery(["getAnnouncementById", announcementData], async () => {
		try {
				const response = await getAnnouncementByIdApi(announcementId);
				return response;
		} catch (error) {
				console.log(error)
		}
	},
	{
		retry: 0,
		onSuccess: response => {
				setAnnouncementData(response.data)
		}
	})

	if(getAnnouncementById.isLoading) {
		return <div>로딩중</div>
	}

		const handleEditClick = (announcementDataId) => {
		navigate(`/admin/edit/announcement/${announcementDataId}`)
	}

	const handleDeleteClick = async (announcementDataId) => {
		if(window.confirm("삭제 하시겠습니까?")) {
				try {
						const option = {
								headers: {
										Authorization: localStorage.getItem("accessToken")
								}
						}
						const response = await deleteAnnouncementApi(announcementDataId, option);
						alert("삭제가 완료되었습니다.")
						return response;
				} catch (error) {
						alert(error.message)
				}   
		}
	}

	const HandleCancle = () => {
		navigate(-1)
	}
```
- 공지사항의 데이터를 가져오는데 성공하면 announcementData상태에 데이터를 저장
- 수정과 삭제 버튼은 관리자인 경우에만 보이도록 해줌줌
<br>

**공지사항 수정**
```javascript
	const [ announcementData, setAnnouncementData ]= useState({
		title: "",
		content: "",
		isPinned: 0,
		createDate: ""
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAnnouncementByIdApi(announcementId);
				setAnnouncementData({
						title: response?.data?.title,
						content: response?.data?.content,
						isPinned: response?.data?.isPinned,
						createDate: response?.data?.createDate,
				});
			} catch (error) {
					console.error(error);
			}
		};
		fetchData();
	}, [announcementId])

	const handleCheckBoxChange = () => {
		setAnnouncementData({
				...announcementData,
				isPinned: announcementData.isPinned === 0 ? 1 : 0
		});
	}

	useEffect(() => {
			if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
					alert("정상적인 접근이 아닙니다.")
					navigate("/")
			}
	}, [])

	const handleInputChange = (e) => {
			const { name, value } = e.target;
			setAnnouncementData({
					...announcementData,
					[name]: value
			})
	}

	const handleEditClick = async () => {
		try {
			const option = {
					headers: {
							Authorization: localStorage.getItem("accessToken")
					}
			}
			const response = await editAnnouncementApi(announcementId, announcementData, option);
			alert("수정이 완료되었습니다.");
			navigate("/notice");

			return response;
		} catch (error) {
				alert(error)
		}
	}
```
- 제목과 내용 고정여부를 수정 가능
- 수정하기 위한 공지사항의 데이터를 가져오는데 성공하면 announcementData상태에 저장
- useEffect를 통해 관리자 권한이 없는 사용자가 접근 할 경우 홈 화면으로 돌려보내줍니다
<br>

## Back-End
**공지사항 Controller**
```java
	@PostMapping("/api/admin/announcement")
	public ResponseEntity<?> addAnnouncement(@RequestBody AddAnnouncementReqDto addAnnouncementReqDto) {
			return ResponseEntity.ok(announcementService.addAnnouncement(addAnnouncementReqDto));
	}
```
- 공지사항 작성 요청을 받는 controller
<br>

```java
	@GetMapping("/api/announcement/all")
	public ResponseEntity<?> getAllAnnouncement() {
			List<GetAnnouncementRespDto> response =  announcementService.getAllAnnouncement();
			return ResponseEntity.ok(response);
	}
```
- 전체 공지사항에 대한 요청을 받는 controller
<br>

```java
	@GetMapping("/api/announcement/count")
	public int getAnnouncementCount() {
			return announcementService.getAnnouncementCount();
	}
```
- 공지사항 전체 갯수에 대한 요청을 받는 controller
<br>

```java
	@GetMapping("/api/announcement/{announcementId}")
	public ResponseEntity<?> getAnnouncementById(@PathVariable int announcementId) {
			return ResponseEntity.ok(announcementService.getAnnouncementById(announcementId));
	}
```
- 특정 공지사항에 대한 요청을 받는 controller
<br>

```java
	@PutMapping("/api/admin/announcement/{announcementId}")
	public ResponseEntity<?> editAnnouncement(@PathVariable int announcementId,@RequestBody EditAnnouncementReqDto editAnnouncementReqDto) {
			return ResponseEntity.ok(announcementService.editAnnouncement(announcementId, editAnnouncementReqDto));
	}
```
- 특정 공지사항 수정 요청을 받는 controller
<br>

```java
	@DeleteMapping("/api/admin/announcement/{announcementId}")
	public ResponseEntity<?> deleteAnnouncement(@PathVariable int announcementId) {
			return ResponseEntity.ok(announcementService.deleteAnnouncement(announcementId));
	}
```
- 특정 공지사항 삭제 요청을 받는 controller
<br>

**공지사항 ReqDto**
```java
public class AddAnnouncementReqDto {
	private String title;
	private String content;
	private String type;
	private int isPinned;
}

public class EditAnnouncementReqDto {
	private int announcementId;
	private String title;
	private String content;
	private int isPinned;

	public Announcement toEntity(int announcementId) {
		return Announcement.builder()
						.announcementId(announcementId)
						.title(title)
						.content(content)
						.isPinned(isPinned)
						.build();
	}
}
```
- 작성시 사용하는 Dto와 수정 시 사용하는 Dto이다.
- 작성시간은 mapper에서 sql문에서 추가해주었다.
- 수정의 경우 entity로 변환해주기 위한 메소드를 추가해주었다.
<br>

**공지사항 RespDto**
```java
public class GetAnnouncementRespDto {
	private int announcementId;
	private String title;
	private String content;
	private int isPinned;
	private String createDate;
}
```
- 특정 공지사항의 데이터를 반환할 때 사용하는 Dto이다.
<br>

**공지사항 Service**
```java
    public boolean addAnnouncement(AddAnnouncementReqDto addAnnouncementReqDto) {
        try {
            return announcementMapper.addAnnouncement(addAnnouncementReqDto) > 0;
        }catch (Exception e) {
            throw new AnnouncementExcption
                    (errorMapper.errorMapper("공지사항", "공지사항 생성 중 오류가 발생하였습니다"));
        }
    }
```
- 공지사항 작성을 위한 부분.
<br>

```java
    public List<GetAnnouncementRespDto> getAllAnnouncement() {
        try {
            return announcementMapper.getAllAnnouncement()
                    .stream()
                    .map(Announcement::toGetAnnouncementRespDto)
                    .collect(Collectors.toList());
        }catch (Exception e) {
            throw new AnnouncementExcption
                    (errorMapper.errorMapper("공지사항", "공지사항 조회 중 오류가 발생하였습니다."));
        }
    }
```
- 전체 공지사항을 리스트로 반환.
<br>

```java
    public int getAnnouncementCount() {
        try {
            return announcementMapper.getAnnouncementCount();
        }catch (Exception e) {
            throw new AnnouncementExcption
                    (errorMapper.errorMapper("공지사항", "공지사항 갯수 조회 중 오류가 발생하였습니다."));
        }
    }
```
- 공지사항의 전체 갯수를 반환.
<br>

```java
    public GetAnnouncementRespDto getAnnouncementById(int announcementId) {
        try {
            return announcementMapper.getAnnouncementById(announcementId).toGetAnnouncementRespDto();
        }catch (Exception e) {
            throw new AnnouncementExcption
                    (errorMapper.errorMapper("공지사항", "공지사항 조회 중 오류가 발생하였습니다."));
        }
    }
```
- 특정 공지사항의 데이터를 반환.
<br>

```java
    @Transactional(rollbackFor = Exception.class)
    public boolean editAnnouncement(int announcementId, EditAnnouncementReqDto editAnnouncementReqDto) {
        try {
            return announcementMapper
                    .editAnnouncement(announcementId, editAnnouncementReqDto.toEntity(announcementId)) > 0;
        }catch (Exception e) {
            throw new AnnouncementExcption
                    (errorMapper.errorMapper("공지사항", "공지사항 수정 중 오류가 발생하였습니다."));
        }

    }
```
- 특정 공지사항의 수정 결과를 반환.
<br>

```java
    @Transactional(rollbackFor = Exception.class)
    public boolean deleteAnnouncement(int announcementId) {
        try {
            return announcementMapper.deleteAnnouncement(announcementId) > 0;
        }catch (Exception e) {
            throw new AnnouncementExcption
                    (errorMapper.errorMapper("공지사항", "공지사항 삭제 중 오류가 발생하였습니다."));
        }
    }
```
- 특정 공지사항의 삭제 결과를 반환.
<br>

**공지사항 Entity**
```java
public class Announcement {
	private int announcementId;
	private String title;
	private String content;
	private int isPinned;
	private String createDate;

	public GetAnnouncementRespDto toGetAnnouncementRespDto() {
			return GetAnnouncementRespDto.builder()
							.announcementId(announcementId)
							.title(title)
							.content(content)
							.isPinned(isPinned)
							.createDate(createDate)
							.build();
	}
}
```
- respDto로 변환하는 메소드를 추가해주었다.
<br>

**공지사항 Repository**
```java
	public int addAnnouncement(AddAnnouncementReqDto addAnnouncementReqDto);
	public List<Announcement> getAllAnnouncement();
	public int getAnnouncementCount();
	public Announcement getAnnouncementById(int announcementId);
	public int editAnnouncement(int announcementId, Announcement announcement);
	public int deleteAnnouncement(int announcementId);
```
-
<br>

**공지사항 Mapper**
```xml
	<insert id="addAnnouncement" parameterType="com.woofnmeow.wnm_project_back.dto.request.AddAnnouncementReqDto">
		insert into
				announcement_tb
		values(0, #{title}, #{content}, #{type}, #{isPinned}, now())
	</insert>
```
- 공지사항 작성을 위한 mabatis 쿼리문
- 쿼리문으로 작성 당시의 시간을 넣어줌
<br>

```xml
	<select id="getAllAnnouncement" resultType="com.woofnmeow.wnm_project_back.entity.Announcement">
		select
				announcement_id,
				title,
				content,
				is_pinned,
				create_date
		from
				announcement_tb
		order by
				is_pinned desc
		limit
		0, 10;
	</select>
```
- 전체 공지사항을 가져오는 mybatis 쿼리문
- 10개씩 보여주기 위해 limit를 걸어주었다.
<br>

```xml
	<select id="getAnnouncementCount" resultType="java.lang.Integer">
		select
				count(*)
		from
				announcement_tb
	</select>
```
- 페이지네이션을 위해 전체 공지사항 갯수를 가져오는 mybatis 쿼리문
<br>

```xml
	<select id="getAnnouncementById"
				parameterType="int"
				resultType="com.woofnmeow.wnm_project_back.entity.Announcement">
		select
				announcement_id,
				title,
				content,
				is_pinned,
				create_date
		from
				announcement_tb
		where
				announcement_id = #{announcementId}
	</select>
```
- 특정 공지사항Id로 데이터를 가져오는 mybatis 쿼리문
<br>

```xml
	<update id="editAnnouncement" parameterType="com.woofnmeow.wnm_project_back.entity.Announcement">
			update
					announcement_tb
			set
					title = #{announcement.title},
					content = #{announcement.content},
					is_pinned = #{announcement.isPinned},
					create_date = now()
			where
					announcement_id = #{announcementId};
	</update>
```
- 공지사항을 수정하는 mybatis 쿼리문
- 쿼리문으로 수정 당시의 시간을 넣어줌
<br>

```xml
	<delete id="deleteAnnouncement" parameterType="int">
			delete from
					announcement_tb
			where
					announcement_id = #{announcementId}
	</delete>
```
- 공지사항을 삭제하는 mybatis쿼리문
<br>

  </div>
  </details>

<p align="right"><a href="#top">TOP 🔼</a></p>
<br/>

## **✍ 느낀점**

<br/>

> **팀장: 정대풍** 
- 단기간동안 프로젝트를 진행하면서 어려움에 부딪혔지만, 그 과정에서 해결해 나가는것이 쉽지 않았습니다.
  하지만 그런 어려움을 극복하고 나서의 성취감이 뿌듯했습니다. 본 과정은 주로 백엔드에 관련되었지만, 프론트 엔드도 함께 배울수 있어 소중한 경험이 되었습니다.
- 특히, 팀장인 저의 성격이 내성적이라 소통하는데 어려움이 있었습니다.
  그로 인해 팀원들과의 소통이 얼마나 중요한지 깨닫게 되었고, 서로 돕고 협업(협력)하는 것이 이번 프로젝트를 만드는데 얼마나 중요한 역할인지 알게 되었습니다.
- 처음에는 프로젝트 DB구조 등 진행 방향을 어떻게 잡아야 할지 막막 했었는데 강사님 덕분에 프로젝트의 방향성을 잡았으며, 이를 통해 프로젝트의 각종 명세서, 구조, 진행 방향 의 중요성과 우선순위를 알게되었습니다.
- 프로젝트를 이끌어나가는 팀장으로서 저의 어떤 부분에서 무엇이 부족한지 스스로 깨닫게 되는 소중한 경험이었습니다.
  부족한 부분을 찾아 공부하고, 코드를 좀 더 깊이 이해할수 있는 기회가 되었으며, 이 과정을 통해 성장 할 수 있을거 같아 뿌듯하고 뜻깊은 시간이었습니다.
<br/>

> **팀원: 장호진** 
- 프로젝트를 시작하면서 명세서같은 문서를 작성할 때 어떤 부분까지 작성해야 할 지 막막했는데 최대한 자세하게 적으라고 하셔서 자세하게 적었다고 생각했는데 프로젝트가 진행되면서 늘어나고 수정 되는걸 보고 실제 회사에선 어떻게 진행되는지 궁금해 졌고,
  프로젝트를 시작하기 전에 팀원들 끼리 맞춰야 할 부분들을 정해야 한다고 했을 때 어떤 것들을 정해야 할 지 막막해서 생각나는 것들을 최대한 정했다고 생각하고 프로젝트를 시작하게 되었을 때 초반에는 크게 문제가 될 것들이 보이지 않아서 순조롭게 진행된다고 생각했는데
  중간에 DB의 테이블 구조를 변경하지 않으면 데이터를 가져오는 게 너무 복잡해 질 것 같다는 선생님의 말씀에 갑자기 테이블 구조를 바꿔야 했을 때,
  프로젝트 막바지에 처음에 생각하지 못했던 페이지네이션 기능을 추가해서 다른 컴포넌트에 적용하게 되었을 때 props로 받은 상태에서 문제가 생기는 걸 보고 이런 것들도 추가하기 전에 시간이 좀 들더라도 어떤 식으로 동작하게 만들지 팀원들과 이야기하고 조언을 구했더라면 문제를 더 쉽게 해결하고 일정    에 문제가 생기지 않았을 것 같아서 아쉽고 팀원에게 미안한 마음이 생겼습니다.
- 프로젝트를 하면서 배웠던 것들을 응용하는 것이 얼마나 어려운지, 초기 기획 단계에서 세세한 부분들을 정하는게 얼마나 중요한지, DB구조를 잘 짜는게 얼마나 중요한지, 내가 짠 코드를 다른 사람이 알기 쉽게 클린 코드를 작성하는 것이 얼마나 중요한지,
  다른 사람이 짠 코드를 이해하는게 얼마나 중요한지  조금이라도 깨달을 수 있었던 시간이 된 것 같습니다.
<br/>

> **팀원: 이동헌** 
- 프로젝트를 진행하면서 힘들었던 부분을 몇 가지 뽑아보자면 협업, 비동기 처리, 정규화 된 데이터베이스의 활용이었다.
  Git을 활용하여 처음 진행한 협업이었기에 브랜치를 사용하는것 자체부터 익숙하지 않았고 새로 작성한 코드를 기존 코드와 문제없이 합치는데 다양한 오류를 해결하는데 많은 시간을 소비하였다.
- 하지만 협업에 많은 시간을 소비한다고 해도 반드시 필요한 작업 구조라고 생각한다.
  코드를 잘 작성한다고 하여도 한 사람이 전체 서비스에 대해 볼 수 있는 시각은 한정적이며, 다양한 사람의 시각으로 장점을 합친 결과물을 만들기 위해서는 시간을 소비한다고 하더라도 이러한 작업 구조에 익숙해질 필요가 있어 의미가 있다고 생각된다.
  React의 비동기 처리는 여러 요청이 복합적으로 오고 가는 상황에서 정확하게 사용하지 않는다면 올바르게 랜더링된 화면을 띄울 수 없어 주의해서 사용하여야 한다.
  특히 비동기 처리에 대해서 가장 힘들었던 부분은 어느 부분에서 코드의 구조적 오류가 발생하였는지 육안으로 확인하기 힘들다는 점이다.
  useState()를 사용한 랜더링이 연속적으로 일어날 때, 새로 랜더링해야 할 화면을 띄우지는 못하지만 클라이언트는 이것을 오류로 인지하지 못하기에 해당 기능을 수행하는 useState() 상태 저장 활동 전반적인 부분을 모두 점검할 필요가 있어서 시간이 많이 소비되었다.
  이 문제를 방지하려면 필요한 만큼의 적은 상태 활용과 오류가 발생하여도 랜더링이 어떤 순서로 일어나야 하는지 보기 쉽도록 코드를 주기적으로 정리하는 것이 좋다고 생각된다.
- 데이터베이스의 정규화는 프로젝트를 진행하는 도중 한번 바뀌었는데, 기존에는 하나의 상품 테이블에 사이즈 column에 해당 상품에 대한 재고를 숫자로 넣어놨지만, 프로젝트를 진행하는 중 상품의 사이즈별 재고 관리, 가격 책정이 불가능하다고 판단되어 사이즈와 가격을 분리하여 정규화하였다.
  구조를 바꿈으로 인해 기존 코드를 수정하는 시간이 굉장히 오래 걸렸으며, 이것을 방지하기 위해서는 처음부터 확장성을 고려하여 데이터베이스를 설계하는 것이 중요하다고 생각된다.
- 회사에서 진행되는 현업에 비해 가벼운 프로젝트라고 할지라도, 첫 작업이라 그런지 꽤 부담스럽게 느껴지는 작업이었다. 
<br/>

> **팀원: 임예림** 
- 프로젝트 시작 하기 전에는 그래도 열심히 공부하고 노력했고, 어느정도 전체적으로 이해했다 생각했었으나 프로젝트를 하면서 새롭게 알게 된 부분도 많았고 알고있었다고 생각한 부분들도 다시 깨닫게 된 부분이 있었습니다.
  그 바탕에는 팀원분들의 도움이 있었기 덕분이라 생각합니다. 프로젝트로 끝이 아니라 앞으로 코드에 대해 공부할 것은 무궁무진하다 생각하며 수료 후에도 배운 부분에 대해 더 꼼꼼히 복습해야되겠다는 다짐과 반성의 시간이 되었습니다.
  프로젝트가 끝난 이 시점에 다시 시작점을 되돌아보니 아쉬움이 많이 남지만 생각한 것 보다 한 프로젝트를 만든다는 건 더 복잡했고, 혼자였다면 헤쳐나가지 못할 시간들을 팀원분들과 함께여서 무사히 완성했습니다. 감사합니다.

<p align="right"><a href="#top">TOP 🔼</a></p>
<br/>
