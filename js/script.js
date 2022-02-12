$(function() {
    // drawer.js
    $('.drawer').drawer()
    
    // smoothscroll
    // #から始まるURLがクリックされた時
    jQuery('a[href^="#"]').click(function () {
        // .headerクラスがついた要素の高さを取得
        let header = jQuery(".header").innerHeight();
        // 移動速度を指定（ミリ秒）
        let speed = 300;
        // hrefで指定されたidを取得
        let id = jQuery(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = jQuery("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得しトップからの距離からヘッダー分の高さを引く
        let position = jQuery(target).offset().top - header;
        // その分だけ移動すればヘッダーと被りません
        jQuery("html, body").animate(
            {
                scrollTop: position
            },
            speed
            );
            return false;
        });


        // wowjs
        new WOW().init()

        //googleform
        let $form = $('#js-form')
    
        $form.submit(function(e) { 
            $.ajax({ 
             url: $form.attr('action'), 
             data: $form.serialize(), 
             type: "POST", 
             dataType: "xml", 
             statusCode: { 
                0: function() {
                    $form.slideUp()
                    $('#js-success').slideDown()
                  //送信に成功したときの処理 
                }, 
                200: function() { 
                    $form.slideUp()
                    $('#js-error').slideDown()
                  //送信に失敗したときの処理 
                }
              } 
            });
            return false; 
          }); 

        // formの入力確認
        let $submit = $( ' #js-submit' )
        $( '#js-form input, #js-form textarea' ).on( 'change', function(){
            if(
                $('#js-form input[type="text"]' ).val() !== "" &&
                $('#js-form input[type="email"]' ).val() !== "" &&
                $('#js-form input[name="entry.1356928949"]' ).prop( 'checked' ) === true
            ) {
                //全て入力された時
                $submit.prop( 'disabled', false)
                $submit.addClass( '-active' )
            } else {
                // 入力されていない時
                $submit.prop( 'disabled', true)
                $submit.removeClass( '-active' )
            }
        })
});
        