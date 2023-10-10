export const tmpl = `
<div class="flex-middle-container">
    <div class="card">
        <form class="login-form">
            <div class="card__container">
                <h1 class="card__title">Вход</h1>
                <div class="login-form__field">
                    <div class="login-form__label" for="username">Логин</div>
                    <input class="login-form__input" type="text" id="username" name="username" required>
                </div>
                <div class="login-form__field">
                    <div class="login-form__label" for="password">Пароль</div>
                    <input class="login-form__input" type="password" id="password" name="password" required>
                </div>
            </div>
            <div class="card__container">
                <button class="login-form__button" type="submit">Войти</button>
                <a class="card__link" href="/signin">Нет аккаунта?</a>
            </div>
        </form>
    </div>
</div>
`