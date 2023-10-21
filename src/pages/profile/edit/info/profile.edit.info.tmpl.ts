export const tmpl = `
<div class="profile">
    <div class="profile__bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
            <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
            <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
        </svg>
    </div>
    <div class="profile__content">
        <div class="profile__content__avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 2ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z" fill="#CDCDCD"/>
            </svg>
            <div class="profile__content__avatar_active">
                Поменять аватар
            </div>
        </div>
        <div class="profile__content__username text_dark">
            Иван
        </div>
        <form class="profile-form">
            <ul class="profile__content__list">
                <li class="profile__content__list__item">
                    <label class="text_dark" for="email">Почта</label>
                    {{{inputEmail}}}
<!--                    <input class="profile-form__input text_light" name="email" type="text" placeholder="example@mail.ru">-->
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="login">Логин</label>
                    {{{inputLogin}}}
<!--                    <input class="profile-form__input text_light" name="login" type="text" placeholder="example">-->
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="first_name">Имя</label>
                    {{{inputUsername}}}
<!--                    <input class="profile-form__input text_light" name="first_name" type="text" placeholder="Иван">-->
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="second_name">Фамилия</label>
                    {{{inputSecondName}}}
<!--                    <input class="profile-form__input text_light" name="second_name" type="text" placeholder="Иванов">-->
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="display_name">Имя в чате</label>
                    {{{displayName}}}
<!--                    <input class="profile-form__input text_light" name="display_name" type="text" placeholder="Иван">-->
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="phone">Телефон</label>
                    {{{inputPhone}}}
<!--                    <input class="profile-form__input text_light" name="phone" type="text" placeholder="123-321-123">-->
                </li>
            </ul>
            {{{button}}}
<!--            <button class="button" type="submit">Сохранить</button>-->
        </form>
    </div>
</div>
`;
