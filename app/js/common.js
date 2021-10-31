$('[name="phone"]').mask('+7(999) 999-99-99');

$('.modal').on('shown.bs.modal', function (e) {
    $('.slick-slider').slick('setPosition');
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});


$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.events-col:hidden').slice(0, 4).slideDown();
});

$.datepicker.setDefaults(
    {
        closeText: 'Закрыть',
        prevText: '',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });
$( "#datepicker" ).datepicker({
    // changeMonth: true,
    // changeYear: true,
    range: 'multiple', // возможные значения: period, multiple
    range_multiple_max: 6, // максимальное число выбранных дат в режиме "Несколько дат"
    onSelect: function(dateText, inst, extensionRange) {
        // extensionRange - добавлен возвращаемый аргумент, содержит в себе объект расширения
    }
});