<template>
    <main class="login">
        <div class="login__wrapper">
            <h1>Login</h1>
            <form>
                <label for="username" class="login__field">
                    <input id="username" type="text" placeholder="Username" />
                    <span>
                        Username
                    </span>
                </label>
                <label for="password"  class="login__field">
                    <input id="password" type="password" placeholder="Password" />
                    <span>
                        Password
                    </span>
                </label>
                <input
                    type="submit"
                    value="Login"
                    class="login__submit"/>
            </form>

        </div>
    </main>
</template>

<style>
    .login {
        align-items: center;
        background: center / cover no-repeat url('./../../assets/login-bg.jpg') var(--theme-color);
        background-blend-mode: hard-light;
        display: flex;
        height: 100vh;
        justify-content: center;
        width: 100vw;
    }

    .login__wrapper {
        background-color: var(--darker-bg);
        color: var(--theme-text-opposite);
        padding: 30px 5%;
    }

    h1 {
        font-size: 32px;
        margin: 0 0 15px;
    }

    .login__field {
        display: flex;
        flex-direction: column-reverse;
        padding: 0 0 15px;
    }

    .login input {
        border: 1px solid var(--theme-color);
        border-radius: 3px;
        padding: 5px 10px;
    }

    .login__field > input {
        color: var(--theme-dark);
        outline-color: var(--theme-color);
    }

    .login__field > input::placeholder,
    .login__field > span {
        color: var( --secondary-text);
    }

    .login__field > span {
        visibility: hidden;
        transition: all .3s linear;
        transform: translate(5px, 1.35em);
    }

    .login__field > input:not(:placeholder-shown) + span {
        color: white;
        transform: translate(0, 0);
        visibility: visible;
    }

    .login__submit {
        background-color: var(--theme-color);
        color: var(--theme-text);
    }
</style>