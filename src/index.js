$(document).ready(function() {
	$("#detectButton").hide();
	
	$("input").change(function() {
		$("#face").empty();
		var file = imageButton.files[0];
		if(!file) {
			$("#detectButton").hide();
			$("#img").attr('src', "");
			return;
		}
		$("#img").attr('src', URL.createObjectURL(file));
		$("#detectButton").show();
	});
	
	$("#detectButton").click(function() {
		if($("#img").attr('src') != "") {
					console.log('adsf');
			$('#img').faceDetection({
				complete: function (faces) {
					console.log(faces);
					$("#face").empty();
					faces.forEach(face => {
						$div = $("<div>", {"class": "face-box"});
						$div.css('top', face.positionY);
						$div.css('left', face.positionX );
						$div.css('width', face.width );
						$div.css('height', face.height );
						$("#face").append($div);
					});
				}
			});
		}
	});
});
