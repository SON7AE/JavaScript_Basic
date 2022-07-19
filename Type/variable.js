// 3.10.1 let과 const를 사용한 선언
// let 문에서 변수에 초깃값을 할당하지 않으면 값을 할당할 때까지 undefined로 남는다.
// 상수를 선언할 때는 const를 사용한다.
// const와 let과 거의 비슷하지만, 선언할 때 반드시 값을 할당해 초기화해야 한다는 점이 다르다.
// 상수의 값을 바꾸려하면 TypeError가 일어난다.
// 상수를 선언할 때는 전부 대문자를 써서 변수와 구별하는 관습이 있다.

// 변수와 상수 스코프
// 변수의 스코프(scope)는 프로그램 소스 코드에서 해당 변수가 정의된 영역이다.
// let과 const로 선언한 변수와 상수는 블록 스코프를 가진다.
// 이 말은 let이나 const 문이 존재하는 블록 안에서만 해당 변수와 상수가 유효하다는 뜻이다.
// 자바스크립트의 클래스와 함수 정의는 블록이고, if/else 문, while 루프, for 루프 등의 바디 역시 블록이다.
// 대략적으로 말해 중괄호 안에서 변수나 상수를 선언하면 그 중괄호가 변수와 상수가 정의된 영역이다.
