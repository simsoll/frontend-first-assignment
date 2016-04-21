'use strict';
var appComponents = appComponents || {};

appComponents.OrderCatalog = function () {

};

appComponents.OrderCatalog.prototype = function () {
    return {
        initialize: initialize
    };

    function initialize() {
        initializeButtons();
    }

    function initializeButtons() {
        initializeSubmitButton();
        initilizeRemoveButtons();
        initializeApproveButtons();
    }

    function initilizeRemoveButtons() {
        $('.order__remove-button').click(function () {
            $.ajax({
                type: 'post',
                url: '/remove',
                data: {
                    id: $(this).data('id')
                }
            }).done(function (id) {
                if (productsIn('pending-orders') === 1) {
                    $('.pending-orders').remove();
                }
                else {
                    $('.pending-orders').find('[data-id=' + id + ']').closest('.order__products-item').remove();
                }

                addToElement('.cart__items', -1);
                updateCheckoutButtonDisabledState();
            });
        });
    }

    function initializeSubmitButton() {
        $('.order__submit-button').click(function () {
            var amounts = [];

            $('.pending-orders .order__products-item').each(function (index, element) {
                var inputElement = $(element).find('input');
                amounts.push(
                    {
                        id: inputElement.data('id'),
                        amount: Number(inputElement.val())
                    });
            });

            $.ajax({
                type: 'post',
                url: '/submit',
                data: {
                    id: $(this).data('id'),
                    amounts: JSON.stringify(amounts),
                    timestamp: formatDate(new Date())
                }
            }).done(function (meta) {
                var $order = $('.pending-orders .order');

                convertPendingOrderToSubmittedOrder($order, meta);
                moveOrderToSection($order, 'submitted-orders', 'Orders to be Approved');

                if (ordersIn('pending-orders') === 0) {
                    $('.pending-orders').remove();
                }

                $('.cart__items').text('0');
                updateCheckoutButtonDisabledState();
            });
        });
    }

    function initializeApproveButtons() {
        $('.order__approve-button').click(function () {
            $.ajax({
                type: 'post',
                url: '/approve',
                data: {
                    id: $(this).data('id'),
                    timestamp: formatDate(new Date())
                }
            }).done(function (data) {
                var $order = $('.order__approve-button[data-id=' + data.id + ']').closest('.order');

                convertSubmittedOrderToApprovedOrder($order, data.meta);
                moveOrderToSection($order, 'approved-orders', 'Approved Orders');

                if (ordersIn('submitted-orders') === 0) {
                    $('.submitted-orders').remove();
                }
            });
        });
    }

    function addToElement(element, number) {
        var $element = $(element);
        $element.text(Number($element.html()) + number);
    }

    function updateCheckoutButtonDisabledState() {
        if (Number($('.cart__items').html()) === 0) {
            $('.checkout-button').prop('disabled', true);
        }
        else {
            $('.checkout-button').prop('disabled', false);
        }
    }

    function productsIn(section) {
        return $('.' + section + ' .order__products-item').length;
    }

    function ordersIn(section) {
        return $('.' + section + ' .order').length;
    }

    function moveOrderToSection(order, section, headline) {
        if (!$('.' + section).length) {
            $('.' + previousSection(section)).after('<div class="' + section + '"><h2>' + headline + '</h2></div>');
        }

        $('.' + section + ' h2').after($(order));
    }

    function previousSection(section) {
        if (section === 'submitted-orders') {
            return 'pending-orders';
        }
        if (section === 'approved-orders') {
            return 'submitted-orders';
        }

        return null;
    }

    function convertPendingOrderToSubmittedOrder(order, meta) {
        //add timestamp and user name
        $(order)
            .prepend('<p>Ordered at: ' + meta.timestamp + '</p>')
            .prepend('<p>Ordered by: ' + meta.user.name + '</p>');

        //replace input box with number
        $(order)
            .find('.order__products-item-amount')
            .each(function (index, element) {
                var amount = $(element).find('input').val();
                $(element).html('Amount: ' + amount);
            });

        //change submit button to approve button
        $(order)
            .find('.order__submit-button')
            .unbind('click')
            .removeClass('order__submit-button')
            .addClass('order__approve-button')
            .html('Approve');
        initializeApproveButtons();
    }

    function convertSubmittedOrderToApprovedOrder(order, meta) {
        //add timestamp and user name
        $(order)
            .prepend('<p>Approved at: ' + meta.timestamp + '</p>')
            .prepend('<p>Approved by: ' + meta.user.name + '</p>');

        //remove approve button
        $(order)
            .find('.order__approve-button')
            .unbind('click')
            .remove();

    }

    function formatDate(date) {
        var weekDayNames = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var monthNames = ['January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'];

        var day = date.getDate();
        var sup = '';

        if (day === 1 || day === 21 || day === 31) {
            sup = 'st';
        }
        else if (day === 2 || day === 22) {
            sup = 'nd';
        }
        else if (day === 3 || day === 23) {
            sup = 'rd';
        }
        else {
            sup = 'th';
        }

        var weekDay = date.getDay();
        var month = date.getMonth();
        var year = date.getFullYear();

        return weekDayNames[weekDay] + ' ' + day + sup + ' ' + monthNames[month] + ' ' + year + ' - ' + formatTime(date);
    }

    function formatTime(date) {
        var amPm = '';
        var hours = date.getHours();

        if (hours < 12) {
            amPm = 'AM';
        }
        else {
            amPm = 'PM';
        }
        if (hours === 0) {
            hours = 12;
        }
        if (hours > 12) {
            hours = hours - 12;
        }

        var seconds = prefixZeroAsString(date.getSeconds());        
        var minutes = prefixZeroAsString(date.getMinutes());
        hours = prefixZeroAsString(hours);

        return hours + ':' + minutes + ':' + seconds + ' ' + amPm;
    }

    function prefixZeroAsString(inputNumber) {
        var inputAsString = inputNumber + '';

        if (inputAsString.length === 1) {
            return '0' + inputAsString;
        }
        
        return inputAsString;
    }
} ();