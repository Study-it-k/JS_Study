
    function checkData() {

        var id = document.getElementById("id");
        var pw1 = document.getElementById("pwd1");
        var pw2 = document.getElementById("pwd2");
        var n1 = document.getElementById("name");
        var em = document.getElementById("email");
        var m2 = document.getElementById("phone2");
        var m3 = document.getElementById("phone3");

        var phoneCheck = /^[0-9]{1}[0-9]{1,3}/;

        if (id.value == "") {
            alert("아이디가 입력되지 않았습니다.");
            id.focus();
            return false;

        }

        if(id.value.length < 5 || id.value.length > 20)
        {
            alert("아이디는 5자리 이상 20글자 이하로 입력하세요");
            id.focus();
            return false;
        }

         
        if(pw1.value=="")
        {
            alert("비밀번호 첫 번째가 입력되지 않았습니다.");
            pw1.focus();
            return false;
        }

        if(pw2.value=="")
        {
            alert("비밀번호 두 번째가 입력되지 않았습니다.");
            pw2.focus();
            return false;
        }

        if(pw1.value != pw2.value)
        {
            alert("비밀번호가 일치하지 않았습니다.");
            pw2.focus();
            return false;
        }

      
        if (n1.value == "" ) {
            alert("이름이 입력되지 않았습니다.");
            n1.focus();
            return false;
        }

        if (em.value == "" ) {
            alert("이메일이 입력되지 않았습니다.");
            em.focus();
            return false;
        }

        if(m2.value == "")
        {
            alert("휴대폰 앞번호가 입력되지 않았습니다.");
            m2.focus();
            return false;
        }
        if(m3.value == "")
        {
            alert("휴대폰 끝번호가 입력되지 않았습니다.");
            m3.focus();
            return false;
        }

        if(m2.value.length != 4)
        {
            alert("휴대폰 번호는 4글자 입력하세요");
            m2.focus();
            return false;
        }

        if(m3.value.length != 4)
        {
            alert("휴대폰 번호는 4글자 입력하세요");
            m3.focus();
            return false;
        }

        if(!phoneCheck.test(m2.value))
        {
            alert("휴대폰 번호는 숫자로만 입력하세요");
            m2.focus();
            return false;
        }

        
        if(!phoneCheck.test(m3.value))
        {
            alert("휴대폰 번호는 숫자로만 입력하세요");
            m3.focus();
            return false;
        }

        return true;    
    }

    function agreeCheck()
    {
        var agree = document.getElementById("agree1");
        var tf = agree.checked;
        if (tf = true)
        {
            signCheck()
        }
        if (tf = false)
        {
            signCheck();
        }

    }
    
    function signCheck()
    {
        var sign = document.getElementById("sign");
        if (sign.disabled = true)
        {
            sign.disabled = false;
        }
        if (sign.disabled = false)
        {
            sign.disabled = true;
        }
    }

   


