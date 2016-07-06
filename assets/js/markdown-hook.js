jQuery(document).ready(function () {
    $("[data-provide=markdown-textarea]").markdown({
        buttons: [
            [{
                name: "groupLink",
                data: [{
                    name: "cmdImage",
                    callback: function(e) {
                        $('#imageModal').modal();
                        var chunk, cursor, selected = e.getSelection(), content = e.getContent(), link;
                        $('#imageModal .btn-success').on('click', function(){
                            link = $('#imageModal img').attr('src');
                            chunk = '图片描述';
                            var images = '';
                            if(link !== null && link !== '' && link !== 'http://') {
                                var sanitizedLink = $('<div>'+link+'</div>').text();
                                images = '!['+chunk+']('+sanitizedLink+' "'+chunk+'")\n\n';
                            }
                            e.replaceSelection(images);
                            cursor = selected.start+2;
                            e.setSelection(cursor,cursor+chunk.length);
                            $(this).off('click');
                        })
                    }
                }]
            }]
        ],
    });

});