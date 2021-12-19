# UI 과제

## Presentation-component 아이콘 버튼 만들기

## Container-component 쇼핑 카드 만들기

- [피그마 시안](<https://www.figma.com/file/NQNxU1ZzRhSrT0Ar9Fqiio/PurchageView-(Copy)?node-id=703%3A483>)
- [요구사항 노션](https://yamoo9.notion.site/No-4-a143b49a4e41411cbf12f76e70aa1d0d)

### 0. 요구사항

- [ ] 스크린리더 사용자가 구매 정가와 할인가, 할인율 정보를 올바르게 이해할 수 있어야 한다.
- [ ] 도움말 버튼을 클릭하면 툴팁이 표시
- [ ] 카운트 값이 0이면 구매하기 버튼이 비활성화 된다.
- [ ] 구매하기 버튼에 마우스가 올라가면 호버 상태로 변경된다.
- [ ] 뷰포트의 너비에 따라 반응형으로 동작한다.

### 1. 컴퍼넌트 분석 및 테스트

> CountButton

- type이 decrement일 때 내부 텍스트가 + 인가
- type이 increment일 때 내부 텍스트가 - 인가

> Counter

- decrement 버튼이 있다.
- increment 버튼이 있다.
- 가정 {min:1, max:10}
- {count:1}인 Counter => decrement 버튼을 눌렀을 때 count가 1이다.
- {count:1}인 Counter => increment 버튼을 눌렀을 때 count가 2이다.
- {count:2}인 Counter => decrement 버튼을 눌렀을 때 count가 1이다.
- {count:10}인 Counter => increment 버튼을 눌렀을 때 count가 10이다.

> IconNaver

```
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" >
<rect width="28" height="28" fill="#F1F2F4"/>
<path d="M7 7H11.719L16.2628 13.5971V7H21V21H16.2628L11.293 14.1082V21H7V7Z" fill="#999999"/>
</svg>

```

- type이 normal일 때
  - rect의 fill 속성값은 white이다.
  - path의 fill 속성값은 #03C75A이다.
- type이 invert일 때
  - rect의 fill 속성값은 #03C75A이다.
  - path의 fill 속성값은 white이다.
- type이 disabled일 때
  - rect의 fill 속성값은 #F1F2F4이다. (color-gray/300)
  - path의 fill 속성값은 #999999이다. (color-gray/100)

> PurchaseButton

- type normal, hover, disaled에 따라 색 테스트

> HelpButton

- '총 상품 금액 도움말' 형식으로 도움말 버튼 앞의 텍스트와 연결되어 읽히도록...?

> Tooltip

- expand가 true이면 Tooltip이 DOM 랜더링 화면에 보인다.
- expand가 false면 Tooltip이 DOM 랜더링 화면에 보이지 않는다.

> PurchaseView

- 구성요소 테스트
  - CountButton, PurchaseButton, HelpButton을 가지고 있다.
  - img의 클래스 이름은 ??이다.
- 상태 관리 테스트
  - count 값이 0이면 PurchaseButton의 type이 disabled이다.
  - 원가 - 구매정가\*할인률 = 판매금액이다.
  - count \* 판매금액 = 구매금액이다.
- 접근성 테스트
  - 할인률, 구매 정가, 판매 금액에 대한 정보를 스크린 리더로 접할 수 있다.
  - 'discount-container'클래스의 자식 중 '할인률'텍스트를 가지고 A11yHidden 클래스를 가진 span 요소가 있다. (?)
    - 'price-original-container', 'price-container'
  - img 의 alt 속성은 '???' 이다.

### PurchaseView 임시 상태

```
{
  "items": [
    {
      "id": "item-1",
      "seller": "Rapigen",
      "title": "래피젠 코로나 자가 검사 키트 2개입X1박스",
      "price": {
        "discount": 88,
        "normalPrice": 56760,
        "discountPrice": 6370
      },
      "delivery": {
        "price": 3000,
        "type": "주문시 결제",
        "unit": 10
      },
      "counter": {
        "min": 1,
        "max": 1000
      }
    },
    {
      "id": "item-2",
      "seller": "SoCompany",
      "title": "골덴 기모 바지 추운 겨울도 걱정없어요 ",
      "price": {
        "discount": 50,
        "normalPrice": 100000,
        "discountPrice": 50000
      },
      "delivery": {
        "price": 3000,
        "type": "주문시 결제",
        "unit": 10
      },
      "counter": {
        "min": 1,
        "max": 1000
      }
    }
  ]
}

```
