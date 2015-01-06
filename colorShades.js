/*
    Copyright 2015 Kuldeep Kamboj
    colorShades.js (https://github.com/kuldeep-k/colorShades)
    Color Shades jQuery Plugin - version 0.2 
    Apache License
*/

(function ( $ ) {
    $.fn.colorShades = function(options) {
        var settings = $.extend({
            // These are the defaults.
            l_items: 3,
            r_items: 7,
            step: 2,
            base_color: '#568203',
            show_color_code: false,
            onSelect : function(color) {},

        }, options );
        var cell_count = settings.l_items + settings.r_items + 1;
        var input_name = $(this).prop('name');
        $('table.color-shades-'+ input_name).remove();
        $('<table class="color-shades color-shades-'+ input_name +'"><tr></tr><tr></tr></table>').insertAfter($(this));
        var col = tinycolor(settings.base_color);
        var colostr = col.toString();
        for(i=0;i< cell_count;i++)
        {
            $('table.color-shades-'+ input_name + ' tr:first').append('<td></td>');
            if(settings.show_color_code === true)
            {
                $('table.color-shades-'+ input_name + ' tr:eq(1)').append('<td></td>');
            }
        }

        for(i=0;i<settings.l_items;i++)
        {
            colostr = col.lighten(settings.step).toString();
            $('table.color-shades-'+ input_name + ' tr:first').find('td').eq(settings.l_items-i-1).css('background-color', colostr);
            if(settings.show_color_code === true)
            {
                $('table.color-shades-'+ input_name + ' tr:eq(1)').find('td').eq(settings.l_items-i-1).html(colostr);
            }
        }

        var col = tinycolor(settings.base_color);
        var colostr = col.toString();

        $('table.color-shades-'+ input_name + ' tr:first').find('td').eq(settings.l_items).css('background-color', colostr);
        if(settings.show_color_code === true)
        {
            $('table.color-shades-'+ input_name + ' tr:eq(1)').find('td').eq(settings.l_items).html(colostr);
        }
        for(i=0;i<settings.r_items;i++)
        {
            colostr = col.darken(settings.step).toString();
            $('table.color-shades-'+ input_name + ' tr:first').find('td').eq(settings.l_items+1+i).css('background-color', colostr);
            if(settings.show_color_code === true)
            {
                $('table.color-shades-'+ input_name + ' tr:eq(1)').find('td').eq(settings.l_items+1+i).html(colostr);;
            }
        }
        var $input = $(this);
        $('table.color-shades-'+ input_name + ' tr:first').find('td').click(function() {
            var color = tinycolor($(this).css('background-color'));
            $input.val(color.toHex());            
            settings.onSelect.call( color );
        });
        return this;
    }; 
}( jQuery ));
