var curcontent = new Array();

curcontent["rules"] = {
  xhead: 'Правила',
  xcon: '<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Информация</span></p>\
<p><li>Не знание правил не освобождает Вас от ответственности.</li></p>\
<p><li>Зайдя на сервер Вы автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</li></p>\
<p><li>Вы несете ответственность за все свои аккаунты. Получив бан за нарушение на одном аккаунте, вы получите его и на последующих. То же самое будет если на одном из ваших аккаунтах имеется EAC блокировка.</li></p>\
<p><li>Если Вы уже были замечены с читами / макросами на другом сервере / проекте и на вас есть пруфы - мы имеем право забанить Вас без проверки.</li></p>\
<p><li>Администрация не обязуется компенсировать игровые ценности, утраченные по причине вашей ошибки, багов игры или технических проблем на сервере.</li></p>\
<p><li>Запрещена продажа или реклама Читов/Макросов.</li></p>\
<p><li>Запрещено выдавать себя за Администратора, модератора или проверяющего.</li></p>\
<p><li>Администрация сама выбирает наказание для игрока в зависимости от степени нарушения и обстоятельств. Игрок может получить просто предупреждение, а может получить и перманентный бан.</li></p>\
<p class="MsoNormal"><span>Геймплей</span></li></p>\
<p><li>Запрещено использовать/хранить читы/макросы или любой другой софт дающий преимущество перед честными игроками.</li></p>\
<p><li>Запрещена игра с читерами/макросниками.</li></p>\
<p><li>Запрещено использование услуг читеров.</li></p>\
<p><li>Запрещено использование любых видов багов с целью или без цели получения преимущества над другими игроками.</li></p>\<br>\
<p class="MsoNormal"><span>Нарушение лимита игроков в команде</span></li></p>\
<p><li>Нельзя жить больше положенного максимума в одном доме</li></p>\
<p><li>Нельзя устраивать альянсы и перемирия с соседями если в сумме вас больше указанного в названии сервера максимума</li></p>\
<p><li>Частая смена тиммейта будет считаться за нарушения правила о лимите</li></p>\
<p><li>Нельзя рейдить и антирейдить в 1+/2+/3+ (подсад, доп.люди на обороне)</li></p><br>\
<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
<p><li>Запрещены ссылки в чате на сторонние сервисы и сайты.</li></p>\
<p><li>Запрещен флуд (многократное повторение бессмысленных фраз, символов) или многократное отправление одинаковых фраз за короткий промежуток времени.</li></p>\
<p><li>Запрещены провокационные сообщения, по типу - "я читер, проверь меня".</li></p>\<br>\
<p class="MsoNormal"><span>Проверки</span></li></p>\
<p><li>Вы имеете полное право отказаться проходить проверку, но в этом случае вы и ваши тиммейты получат блокировку на всех наших серверах.</li></p>\
<p><li>При согласии на проверку вы разрешаете устанавливать сторонние программы нужные администрации для проверки вашего PC.</li></p>\
<p><li>Проверки проходят только через программы «DISCORD» и «SKYPE». Каждый игрок на нашем проекте, в обязательном порядке должен иметь одну из данных программ на своём пк (или хотя-бы аккаунт в дискорде).</li></p>\
<p><li>Выход с сервера во время вызова на проверку увенчается блокировкой.</li></p>\
<p><u><br>\
</u></p>\
</ul></div></div>'
};

//<p style="text-align: center;"><u>При заходе на наши сервера вы автоматически соглашаетесь с правилами.</u></p>\

//  обычные, VIP, TitanVIP, EliteVIP
//
// kit-free
// vip
// kit-titanvip
// kit-elitevip
//

/*curcontent["kit-free"] = {
  xhead: 'Обычные киты',
  xcon: `<div class="store-categories">
    <button class="btn btn-secondary" onclick="Open('kit-free', false);">VIP</button>
    <button class="btn btn-secondary" onclick="Open('kit-titanvip', false);">TitanVIP</button>
    <button class="btn btn-secondary" onclick="Open('kit-elitevip', false);">EliteVIP</button>
    
    <div class="xbox_custom_kits" >
      <div class="serverheader">Кит "Стартовый" - <span>Откат 15м</span></div>
      <div class="kit_set">
        <div class="kit-items">
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stone.pickaxe.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`,
};*/

curcontent["kit-free"] = {
  xhead: 'Платные киты',
  xcon: `<div class="store-categories">
    <button class="btn btn-secondary active" onclick="Open('kit-free', false);">VIP</button>
    <button class="btn btn-secondary" onclick="Open('kit-titanvip', false);">TitanVIP</button>
    <button class="btn btn-secondary" onclick="Open('kit-elitevip', false);">EliteVIP</button>

    <div class="xbox_custom_kits" >
      <div class="serverheader">Кит "VIP" - <span>Откат 8ч.</span></div>
      <div class="kit_set">
        <div class="kit-items">
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/b130d3127b8cb0833c8a1c83394f4552.png">
              <div class="kit-item__quantity">x10.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cf9562cf8d757e678ade3d5899ab791a.png">
              <div class="kit-item__quantity">x10.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cdedeae9fa1b93aab0f2e69eb4746537.png">
              <div class="kit-item__quantity">x2.500</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/05fde009ebeed205da8117b43ab96d95.png">
              <div class="kit-item__quantity">x1.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/8ef4a96a346a6f0767c691bf5c9be5fb.png">
              <div class="kit-item__quantity">x1.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/15e2e5ef45abe9a0b2b397fbc0be2098.png">
              <div class="kit-item__quantity">x1.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/b71e9693f9f878566e75d324240fb41e.png">
              <div class="kit-item__quantity">x500</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/95f7bc50d1458203a0924a572269bd1f.png">
              <div class="kit-item__quantity">x100</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/c0fa952d07bbf02f55ed344b3260763b.png">
              <div class="kit-item__quantity">x100</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/715dfb912af103a7fc35cf32b98ae40e.png">
              <div class="kit-item__quantity">x12</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/a530c861a8ca6438edd84b8717c16e0c.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/93339906d7d90d510fa591555ba74197.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/7830af94d60e2e5bed7e8d95299a2d44.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/c0a23c58ce8cfa449ff86f8bb51d8a87.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cbf91883b6fa7dd289713b66cb649bd6.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/ee52a04b0bed8f983db8d68d8d78e3bf.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/b9902424c66b969f5c34caebb0a92245.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/b11266fb484127208d295ad42cdf709f.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/2677859efdd4b2fa0bd998c2f43836a4.png">
              <div class="kit-item__quantity">x64</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
};

curcontent["kit-titanvip"] = {
  xhead: 'Платные киты',
  xcon: `<div class="store-categories">
    <button class="btn btn-secondary" onclick="Open('kit-free', false);">VIP</button>
    <button class="btn btn-secondary active">TitanVIP</button>
    <button class="btn btn-secondary" onclick="Open('kit-elitevip', false);">EliteVIP</button>

    <div class="xbox_custom_kits" >
      <div class="serverheader">Кит "TitanVIP" - <span>Откат 8ч.</span></div>
      <div class="kit_set">
        <div class="kit-items">
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/b130d3127b8cb0833c8a1c83394f4552.png">
              <div class="kit-item__quantity">x25.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cf9562cf8d757e678ade3d5899ab791a.png">
              <div class="kit-item__quantity">x25.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cdedeae9fa1b93aab0f2e69eb4746537.png">
              <div class="kit-item__quantity">x7.500</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/05fde009ebeed205da8117b43ab96d95.png">
              <div class="kit-item__quantity">x2.500</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/8ef4a96a346a6f0767c691bf5c9be5fb.png">
              <div class="kit-item__quantity">x2.500</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/15e2e5ef45abe9a0b2b397fbc0be2098.png">
              <div class="kit-item__quantity">x2.500</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/b71e9693f9f878566e75d324240fb41e.png">
              <div class="kit-item__quantity">x1.200</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/95f7bc50d1458203a0924a572269bd1f.png">
              <div class="kit-item__quantity">x250</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/c0fa952d07bbf02f55ed344b3260763b.png">
              <div class="kit-item__quantity">x250</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/715dfb912af103a7fc35cf32b98ae40e.png">
              <div class="kit-item__quantity">x20</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/dd31b0dcd1dbc6d36f28145b49446351.png">
              <div class="kit-item__quantity">x200</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/abcf3b856b26c6b8a7c510b0c745c182.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/4ecdd2216ea1a9845f3a834e3e0f000e.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cfc1a92d81da0f38fce79dd032132c48.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/8552b85b4f202ebcda078e500b40c1fa.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/4e8f9aa53798f8d0ed932f1c7d38ae2d.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/0cab000fe67bb1dbe676256b639328d4.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/7830af94d60e2e5bed7e8d95299a2d44.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/c0a23c58ce8cfa449ff86f8bb51d8a87.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cbf91883b6fa7dd289713b66cb649bd6.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/ee52a04b0bed8f983db8d68d8d78e3bf.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
};


curcontent["kit-elitevip"] = {
  xhead: 'Платные киты',
  xcon: `<div class="store-categories">
    <button class="btn btn-secondary" onclick="Open('kit-free', false);">VIP</button>
    <button class="btn btn-secondary" onclick="Open('kit-titanvip', false);">TitanVIP</button>
    <button class="btn btn-secondary active">EliteVIP</button>

    <div class="xbox_custom_kits" >
      <div class="serverheader">Кит "EliteVIP" - <span>Откат 8ч.</span></div>
      <div class="kit_set">
        <div class="kit-items">
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/b130d3127b8cb0833c8a1c83394f4552.png">
              <div class="kit-item__quantity">x40.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cf9562cf8d757e678ade3d5899ab791a.png">
              <div class="kit-item__quantity">x40.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cdedeae9fa1b93aab0f2e69eb4746537.png">
              <div class="kit-item__quantity">x20.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/05fde009ebeed205da8117b43ab96d95.png">
              <div class="kit-item__quantity">x4.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/8ef4a96a346a6f0767c691bf5c9be5fb.png">
              <div class="kit-item__quantity">x4.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/15e2e5ef45abe9a0b2b397fbc0be2098.png">
              <div class="kit-item__quantity">x4.000</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/b71e9693f9f878566e75d324240fb41e.png">
              <div class="kit-item__quantity">x2.500</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/95f7bc50d1458203a0924a572269bd1f.png">
              <div class="kit-item__quantity">x400</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/c0fa952d07bbf02f55ed344b3260763b.png">
              <div class="kit-item__quantity">x500</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/715dfb912af103a7fc35cf32b98ae40e.png">
              <div class="kit-item__quantity">x20</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/dd31b0dcd1dbc6d36f28145b49446351.png">
              <div class="kit-item__quantity">x200</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/abcf3b856b26c6b8a7c510b0c745c182.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/4ecdd2216ea1a9845f3a834e3e0f000e.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/0c3a6326953c2fe8658f8b7c52dd3bf6.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cfc1a92d81da0f38fce79dd032132c48.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/8552b85b4f202ebcda078e500b40c1fa.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/4e8f9aa53798f8d0ed932f1c7d38ae2d.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/0cab000fe67bb1dbe676256b639328d4.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/7830af94d60e2e5bed7e8d95299a2d44.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/c0a23c58ce8cfa449ff86f8bb51d8a87.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/cbf91883b6fa7dd289713b66cb649bd6.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/ee52a04b0bed8f983db8d68d8d78e3bf.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
          <div class="kit-items__item">
            <div class="kit-item">
              <img class="kit-item__image" src="https://www.rust-items.com/icons/fb4bac8bc370915d205586b07b933ad6.png">
              <div class="kit-item__quantity">x1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
};


var BlockListArrays = [
  /* 1 час    */ ["pistol.revolver", "shotgun.double",],
  /* 2 часа   */ ["pistol.python", "pistol.semiauto", "riot.helmet"],
  /* 4 часа   */ ["shotgun.pump", "pistol.m92", "coffeecan.helmet", "roadsign.jacket", "roadsign.kilt"],
  /* 8 часов  */ ["flamethrower", "shotgun.spas12", "smg.2", "smg.thompson", "rifle.semiauto"],
  /* 12 часов */ ["smg.mp5", "rifle.bolt", "rifle.m39", "metal.facemask", "metal.plate.torso", "grenade.f1"],
  /* 24 часа  */ ["rifle.ak", "rifle.lr300", "rifle.l96", "grenade.beancan", "surveycharge", "explosive.satchel"],
  /* 36 часов */ ["lmg.m249", "heavy.plate.helmet", "heavy.plate.jacket", "heavy.plate.pants"],
  /* 48 часов */ ["ammo.rifle.explosive", "ammo.rocket.basic", "rocket.launcher", "explosive.timed"],
];

/*

1 час:
"pistol.revolver", "shotgun.double"

2 часа:
"pistol.python", "pistol.semiauto", "riot.helmet"

4 часа:
"shotgun.pump", "pistol.m92", "coffeecan.helmet", "roadsign.jacket", "roadsign.kilt"

8 часов:
"flamethrower", "shotgun.spas12", "smg.2", "smg.thompson", "rifle.semiauto"

12 часов:
"smg.mp5", "rifle.bolt", "rifle.m39", "metal.facemask", "metal.plate.torso", "grenade.f1"

24 часа:
"rifle.ak", "rifle.lr300", "rifle.l96", "grenade.beancan", "surveycharge", "explosive.satchel"

36 часов:
"lmg.m249", "heavy.plate.helmet", "heavy.plate.jacket", "heavy.plate.pants"

48 часов:
"ammo.rifle.explosive", "ammo.rocket.basic", "ammo.rocket.fire", "ammo.rocket.hv", "rocket.launcher", "explosive.timed"

['pistol.revolver', 'shotgun.double',],
['flamethrower', 'bucket.helmet', 'riot.helmet', 'pants', 'hoodie',],
['pistol.python', 'pistol.semiauto', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt', 'icepick.salvaged', 'hammer.salvaged', 'axe.salvaged',],
['shotgun.pump', 'shotgun.spas12', 'pistol.m92', 'smg.mp5', 'jackhammer', 'chainsaw',],
['smg.2', 'smg.thompson', 'rifle.semiauto', 'grenade.f1',],
['rifle.bolt', 'rifle.ak', 'rifle.lr300', 'rifle.l96', 'rifle.m39', 'metal.facemask', 'metal.plate.torso',],
['grenade.beancan', 'surveycharge', 'explosive.satchel',],
['lmg.m249', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants',],
['rocke

['pistol.revolver', 'shotgun.double'],
['shotgun.waterpipe', 'pistol.revolver'],
['shotgun.waterpipe', 'pistol.revolver'],
['flamethrower', 'pistol.python', 'pistol.semiauto', 'shotgun.double'], 
['shotgun.pump', 'shotgun.spas12', 'pistol.m92', 'rifle.semiauto', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt', 'pookie.bear'],
['smg.2', 'smg.thompson', 'smg.mp5', 'rifle.m39', 'metal.facemask', 'metal.plate.torso'], 
['rifle.bolt', 'multiplegrenadelauncher', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'], 
['rifle.ak', 'rifle.lr300', 'rifle.l96', 'grenade.f1', 'grenade.beancan', 'explosive.satchel'],
['lmg.m249', 'ammo.rifle.explosive', 'explosive.timed', 'rocket.launcher', 'ammo.grenadelauncher.he']
*/

curcontent["block"] = {
  xhead: 'Блокировка предметов после вайпа', 
  xcon: '<div class="xbox_custom_block"><div class="kit-items">'
  
};



function Open(el, usefade = true, zind = false) {
  closepage();
  var div1 = document.createElement("div");
    div1.id = 'Modal';
  var div2 = document.createElement("div");
  div2.className = 'modal modal-xacku fade';
  if(!usefade) div2.classList.add("show");
  div2.style = 'display: block; z-index: 1100;';
  div2.id = 'closer';
  //div2.onclick = closepage;
  var div3 = document.createElement("div");
  div3.className = "modal-dialog modal-lg";
  if(el=="block")div3.className+=" modal-lg-block"
  var div4 = document.createElement("div");
  div4.className = "modal-content";
  var div5 = document.createElement("div");
  div5.className = "modal-header";
  div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
  var div6 = document.createElement("div");
  div6.className = "modal-body";
  div6.innerHTML = curcontent[el].xcon;
  var div7 = document.createElement("div");
  div7.className = "modal-footer";
  div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
  var div8 = document.createElement("div");
  div8.className = "modal-backdrop fade show";
  div8.style = 'z-index: 1050;';
  
  div1.appendChild(div2);
  //div2.appendChild(div2_5);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);
  div4.appendChild(div7);
  div1.appendChild(div8);
  if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
  
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(div1);
  body.className = "modal-open";
}


function closepage() {
  var Modal = document.getElementById('Modal');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}

function search(e){
  if (e.offsetX < 1) { 
    console.log(e.target.innerText + ' | ' + e.clientX);
    if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(e.target);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(e.target);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.'); 
      } catch (err) {
      console.log('Oops, unable to copy' + err);
      }
    }
}

var promoWrap,
    scratch,
    scratchParts,
    scratched = false;
    screatchProperties = {
      h: 10, l: -70,
      speed: 2,  t: 20,
      bgt: 65, bgl: 35,
    };

window.onload = function () {
  document.body.onclick=function(event)
  {
    if(event.target.id == 'closer')closepage();
    if(event.target.className == 'MsoCommand')search(event);
  }
  
  for (var i = 0; i < BlockListArrays.length; i++) {
    curcontent["block"].xcon += '<div class="block_by_category block_category_'+ (i + 1) +'">';
    for (var b = 0; b < BlockListArrays[i].length; b++) {
      curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/'+ BlockListArrays[i][b] +'.png">\
                    <div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
    }
    curcontent["block"].xcon += '</div>';
  }
  curcontent["block"].xcon += '</div>\<br></i></div>';

  //scratched widget init
  scratchInit();
}

function scratchInit() {
  if (promoWrap == null || typeof promoWrap == 'undefined') {
    promoWrap = document.getElementById('promo');
    setTimeout(scratchInit, 1000);
  } else {
    scratch = promoWrap.children[1];
    scratchParts = [];

    //gen scratch parts
    let partsCount = (promoWrap.offsetWidth+screatchProperties.l*-1)/screatchProperties.h;
    for (let a = 0; a < partsCount; a++) {
      let part = document.createElement('div');
      let bg = document.createElement('div');
      part.className = 's-part';
      part.style.height = screatchProperties.h+'px';
      part.style.top = screatchProperties.t+'px';
      part.style.left = (screatchProperties.l+screatchProperties.h*a)+'px';
      bg.className = 'bg';
      bg.style.top = (screatchProperties.bgt-(screatchProperties.h*0.7)*a)+'px';
      bg.style.left = (screatchProperties.bgl-(screatchProperties.h*0.7)*a)+'px';
      part.append(bg);
      scratch.append(part);
      scratchParts.push(part);
    }
    promoWrap.style.opacity = 1;
    scratch.onclick=function(event){
      if (!scratched) {
        scratched = true;
        // scratch.getElementsByTagName('img')[0].remove();
        toscratch();
      }
    }
  }
}

function toscratch() {
  if (Object.keys(scratchParts).length > 0) {
    let part2scratch = Math.floor(Math.random() * (Object.keys(scratchParts).length + 1));
    if (typeof scratchParts[Object.keys(scratchParts)[part2scratch]] != 'undefined') {
      let part = scratchParts[Object.keys(scratchParts)[part2scratch]];
      part.style.width = '0px';
      delete(scratchParts[Object.keys(scratchParts)[part2scratch]]);
      part.remove();
    }
    setTimeout(toscratch, 50);
  } else {
    scratch.remove();
  }
}