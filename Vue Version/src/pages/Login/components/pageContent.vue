<template>
    <div class="page-content">
        <div class="content-wrap">
            <div class="login-window" style="border-left: 2px solid rgb(var(--color-background)); transition: 1s;">
                <h1>Already a member?</h1>
                <div class="username">
                    <form>
                        <input type="text" placeholder="Username" v-model="loginData.username">
                    </form>
                </div>
                <div class="password">
                    <form>
                        <input type="password" placeholder="Password" v-model="loginData.password" id="loginpwd">
                    </form>
                    <div class="show-pwd" @click="showLoginPass()">
                        <i class="fas fa-eye-slash" v-if="!loginPasswordShown"></i>
                        <i class="fas fa-eye" v-if="loginPasswordShown"></i>
                    </div>
                </div>
                <div class="captcha">
                </div>
                <div class="button-wrap">
                    <btn-submit class="button-submit">Login</btn-submit>
                </div>
                <div class="forgot">
                    <a href="">Forgot password?</a>
                </div>
            </div>
            <div class="login-window">
                <h1>Not a member?</h1>
                <div class="email">
                    <form>
                        <input type="email" placeholder="16 digits of your credit card" v-model="signupData.email">
                    </form>
                </div>
                <div class="username">
                    <form>
                        <input type="text" placeholder="Your first and last name" v-model="signupData.username">
                    </form>
                </div>
                <div class="password">
                    <form>
                        <input type="password" placeholder="Expiry date" v-model="signupData.password" id="signuppwd">
                    </form>
                    <div class="show-pwd" @click="showSignUpPass()">
                        <i class="fas fa-eye-slash" v-if="!signUpPasswordShown"></i>
                        <i class="fas fa-eye" v-if="signUpPasswordShown"></i>
                    </div>
                </div>
                <div class="password">
                    <form>
                        <input type="password" placeholder="CVC Code" v-model="signupData.confirmPassword" id="signuppwd-confirm">
                    </form>
                    <div class="show-pwd" @click="showSignUpPass()">
                        <i class="fas fa-eye-slash" v-if="!signUpPasswordShown"></i>
                        <i class="fas fa-eye" v-if="signUpPasswordShown"></i>
                    </div>
                </div>
                <p class="pwd-match" v-if="!passwordsMatch">Passwords must match</p>
                <!-- <div class="terms">
                    <form>
                        <i class="fas fa-circle" v-if="!isChecked" @click="check()" style="color: rgb(var(--color-gray-dark));"></i>
                        <i class="fas fa-check-circle" v-if="isChecked" @click="check()" style="color: rgb(145, 125, 177);"></i>
                        <p>I agree to Zenbu's <a href="">Terms of Service</a></p>
                    </form>
                </div> -->
                <div class="captcha">
                </div>
                <p style="width: 50%; text-align: center; font-size: 12px; margin-top: -10px; margin-bottom: 30px">By clicking "Create account" you agree to our <a style="font-size: 12px" href="">Terms of Service</a></p>
                <div class="button-wrap">
                    <btn-submit class="button-submit">Create account</btn-submit>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pageContent',
    data() {
        return {
            isChecked: false,
            passwordsMatch: true,
            loginPasswordShown: false,
            signUpPasswordShown: false,

            loginData: {
                username: '',
                password: '',
            },
            
            signupData: {
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
            },
        }
    },
    methods: {
        check() {
            this.isChecked = !this.isChecked
        },
        showLoginPass() {
            this.loginPasswordShown = !this.loginPasswordShown

            var x = document.getElementById("loginpwd");

            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        },
        showSignUpPass() {
            this.signUpPasswordShown = !this.signUpPasswordShown

            var x = document.getElementById("signuppwd");
            var y = document.getElementById("signuppwd-confirm");

            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }

            if (y.type === "password") {
                y.type = "text";
            } else {
                y.type = "password";
            }     
        },
    },
    updated() {
        if (this.signupData.password == this.signupData.confirmPassword) {
                this.passwordsMatch = true
            } else {
                this.passwordsMatch = false
            }
    }
}
</script>

<style scoped>
    .page-content {
        padding-top: 10%;
        min-height: 100vh;
    }

    .content-wrap {
        background-color: rgb(var(--color-foreground));
        margin: auto;
        width: 60%;
        border-radius: 20px;
        display: flex;
        flex-direction: row-reverse;
        transition: 1s;
    }

    .login-window {
        padding: 40px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-window h1 {
        font-family: "Raleway";
        font-weight: bold;
        margin-bottom: 60px;
        color: rgb(var(--color-text));
        transition: 1s;
    }

    .login-window h3 {
        font-family: "Raleway";
        margin-bottom: 5px;
    }

    .login-window input[type=text],
    .login-window input[type=email],
    .login-window input[type=password] {
        width: 100%;
        font-family: "Raleway";
        transition: 1s;
        border: none;
        font-size: 1rem;
        background: none;
    }

    .username, .password, .email {
        width: 65%;
        margin-bottom: 30px;
        background-color: rgb(var(--color-background));
        padding: 10px 20px;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .password p {
        text-align: center;
    }

    .show-pwd i {
        color: rgb(var(--color-text));
        cursor: pointer;
    }

    .pwd-match {
        margin: -15px 0px 40px 0px
    }

    .terms form {
        display: flex;
        align-items: center;
        margin-top: -10px;
        margin-bottom: 20px;
    }

    .terms form p {
        margin-left: 5px;
    }

    .terms form i {
        border-radius: 50%;
        cursor: pointer;
        transition: 1s;
        animation: rotateIn 0.3s;
    }

    .button-submit {
        display: flex;
        width: 150px;
        justify-content: center;
        transition: 0.15s ease-out;
        margin-bottom: 20px;
    }

    .button-submit:hover {
        width: 200px;
        transition: 0.15s ease-out;
    }

    btn-submit {
        padding: 10px;
        background-color: rgb(145, 125, 177);
        font-family: "Raleway";
        font-weight: bold;
        color: white;
        cursor: pointer;
        border-radius: 20px;
    }

    .login-window a {
        font-family: "Raleway";
        color: rgb(var(--color-link));
        font-size: 0.9rem;
        transition: 0.2s;
    }

    .login-window a:hover {
        font-family: "Raleway";
        color: rgb(145, 125, 177);
        font-size: 0.9rem;
        transition: 0.2s;
    }

    .sign-up {
        margin-top: 100px;
    }

    .login-window p {
        font-family: "Raleway";
        color: rgb(var(--color-text));
        font-size: 0.9rem;
        transition: 0.2s;
    }
</style>