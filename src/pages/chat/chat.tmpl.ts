export const tmpl = `
<div class="flex-middle-container">
    <div class="chat-panel">
        <div class="chat-panel__header">
            <span class="chat-panel__header__link text_light">
                {{{settingsLink}}}
                <svg width="8" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L5 5L1 1" stroke="#999999"/>
                </svg>
            </span>
            <input class="chat-panel__header__input" type="text" placeholder="Поиск">
        </div>
        <ul class="chat-panel__list">
        
<!--            <li class="chat-panel__list__item">-->
<!--                <div class="chat-panel__list__item__avatar">-->
<!--                    -->
<!--                </div>-->
<!--                <div class="chat-panel__list__item__content">-->
<!--                    <div class="text_dark title">Андрей</div>-->
<!--                    <div class="text_light text">Какое-то сообщение 123 asdsadasdas dasdasdas dasdasdas dasdasd</div>-->
<!--                </div>-->
<!--                <div class="chat-panel__list__item__notify">-->
<!--                    <div class="time text_light">10:32</div>-->
<!--                    <div class="notify">12</div>-->
<!--                </div>-->
<!--            </li>-->
            
            {{{chatPanelItems}}}
            
        </ul>
    </div>
    <div class="chat-feed">
    
        <div class="chat-feed__top-bar">
            <div class="chat-feed__top-bar__profile">
                <div class="avatar"></div>
                <h2 class="name">{{ first_name }} {{ second_name}}.</h2>
            </div>
            
            <div class="chat-feed__top-bar__menu">
                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="circle" cx="1.5" cy="2" r="1.5"/>
                    <circle class="circle" cx="1.5" cy="8" r="1.5"/>
                    <circle class="circle" cx="1.5" cy="14" r="1.5"/>
                </svg>
            </div>
        </div>
        
        <div class="chat-feed__messages">
            <div class="data text_light">19 октября</div>
            
            <div class="message message_left">
                Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
                <span class="time">10:33</span>
            </div>
            
            <div class="message message_right">
                <span>Очень интересно!</span>
                <span class="time">10:34</span>
            </div>
        </div>
        
        {{{messageForm}}}
       
    </div>
</div>
`;
