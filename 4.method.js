const apple = {
  name: 'apple',
  display: function () {
    // key : dispaly , value : function
    // 객체 내 메서드가 동일 객체 내 속성 접근시 'this.속성 명' 으로 접근
    console.log(`${this.name} : apple1`);
  },
};

apple.display();
