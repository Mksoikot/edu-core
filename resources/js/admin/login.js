import $ from 'jquery';

$('.toggle-password').on('click', function() {
    const input = $(this).siblings('input');
    const isPassword = input.attr('type') === 'password';
    input.attr('type', isPassword ? 'text' : 'password');
    $(this).find('svg')
        .removeClass(isPassword ? 'icon-eye' : 'icon-eye-off')
        .addClass(isPassword ? 'icon-eye-off' : 'icon-eye');
});
