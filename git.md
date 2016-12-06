# Git 사용법 정리

git bush 에서 

### github로그인 
$ git config --global user.name "YOUR NAME" <br>
$ git config --global user.email "YOUR EMAIL ADDRESS"

### [github repository 만들기](https://help.github.com/articles/fork-a-repo/)

### 내컴퓨터에 다운로드 
$ git clone https://github.com/github아이디/repository이름.git

### 파일 수정 후 등록하기 
$ git add . // 수정된 파일 모두 <br>
or $ git add "파일이름" // 특정 파일 <br>
$ git commit -m "설명" // commit설명, 등록완료 <br>
$ git push -u origin master  // github에 올리기 

### 최신 소스 받기 
$ git pull 


### 연관링크
[git Branch 설명 블로그](http://mobicon.tistory.com/166)
