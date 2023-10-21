export const tmpl = `
<div class="flex-middle-container">
    <div class="card">
        <form class="login-form">
            <div class="card__container">
                <h1 class="card__title">Вход</h1>
                <div class="login-form__field">
                    <label class="login-form__label text_light" for="username">Логин</label>
                    {{{inputLogin}}}
                </div>
                <div class="login-form__field">
                    <label class="login-form__label text_light" for="password">Пароль</label>
                    {{{inputPassword}}}
                </div>
            </div>
            <div class="card__container">
                {{{button}}}
                <a class="card__link" href="/signin">Нет аккаунта?</a>
            </div>
        </form>
    </div>
</div>
`;
