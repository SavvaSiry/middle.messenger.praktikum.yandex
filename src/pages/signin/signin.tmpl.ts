export const tmpl = `
<div class="flex-middle-container">
    <div class="card">
        <form class="login-form">
            <div class="card__container">
                <h1 class="card__title">Регистрация</h1>
                <div class="login-form__field">
                    <div class="login-form__label" for="email">Почта</div>
                    <input class="login-form__input" type="text" id="email" name="email" required>
                </div>
                <div class="login-form__field">
                    <div class="login-form__label" for="login">Логин</div>
                    <input class="login-form__input" type="text" id="login" name="login" required>
                </div>
                <div class="login-form__field">
                    <div class="login-form__label" for="first_name">Имя</div>
                    <input class="login-form__input" type="text" id="first_name" name="first_name" required>
                </div>
                <div class="login-form__field">
                    <div class="login-form__label" for="second_name">Фамилия</div>
                    <input class="login-form__input" type="text" id="second_name" name="second_name" required>
                </div>
                <div class="login-form__field">
                    <div class="login-form__label" for="phone">Телефон</div>
                    <input class="login-form__input" type="text" id="phone" name="phone" required>
                </div>
                <div class="login-form__field">
                    <div class="login-form__label" for="password">Пароль</div>
                    <input class="login-form__input" type="password" id="password" name="password" required>
                </div>
                <div class="login-form__field">
                    <div class="login-form__label" for="password">Пароль (еще раз)</div>
                    <input class="login-form__input" type="password" id="password" name="password" required>
                </div>
            </div>
            <div class="card__container">
                <button class="login-form__button" type="submit">Зарегестрироваться</button>
                <a class="card__link" href="/login">Войти</a>
            </div>
        </form>
    </div>
</div>
`
