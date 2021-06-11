$(document).ready(function(params) {  
    $('#delete').on('click', function (e) {
        $target = $(e.target)
        let dataID = $target.attr('data-id');
        // console.log(data);
        $.ajax({
            type :'DELETE',
            url:'/mahasiswa/'+dataID,
            success: function (response) {
               alert('Deleting mahasiswa data');
               window.location.href = '/mahasiswa/'; 
               console.log('ok');
            }, 
            error: function (err) {
                console.log(err);
            }
        })
    })  
})