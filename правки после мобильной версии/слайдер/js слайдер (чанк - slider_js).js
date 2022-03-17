<script>
$(function(){
$("#slides").slidesjs({
pagination: {
active: true,
// показывать (true) или нет (false) навигацию по слайдам
effect: "fade"
// эффект перехода к слайду при нажатии пользователям на навигацию "slide" - перелистывание или "fade" появление вспышка
},
play: {
active: false,
// показывать (true) или нет (false) кнопку остановки слайдов
effect: "slide",
// эффект при автоматическом показе слайдов "slide" - обычный сдвигом в бок или "fade" - появление
interval: 5000,
// время между появлением слайдов в миллисекундах 5000 - равно пяти секундам паузы
auto: true,
// запускать слайды при открытие страницы пользователям true , если false пользователь должен будет сам выбирать нужный слайд
swap: true,
// показывать (true) или нет (false) переключать - то кнопку стоп , то кнопку плей
pauseOnHover: false,
// останавливать слайды когда пользователь навел мышь на слайд (true) или нет (false)
restartDelay: 2500
// время в миллисекундах для перезагрузки слайдов
},
navigation: {
active: false,
// показывать (true) или нет (false) кнопки вперед - назад
// вы можете задать свои собственные кнопки с помощью классов стилей <style>
// предыдущая страница класс: class="slidesjs-previous slidesjs-navigation"
// следующая страница класс: class="slidesjs-next slidesjs-navigation"
effect: "slide"
// эффект перехода при нажатии на кнопки вперед - назад "slide" - обычный в бок или "fade" - появление
}
});
});
</script>