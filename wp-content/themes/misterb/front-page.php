<?php 
get_header();
?>
<div id="brands-slideshow">
	<?php
	foreach(get_posts(array('post_type'=>'brand','orderby'=>'title','order'=>'ASC','posts_per_page'=>-1)) as $brand) {
		echo get_image('slideshow',1,1,1,$brand->ID,NULL,array('alt'=>$brand->post_title));
	}
	?>
</div>
<div id="home-container">
	<div id="home-description">
		<?php
		echo get_posts(array('pagename'=>'home','post_type'=>'page'))[0]->post_content;
		?>
	</div>
</div>


<?php get_footer(); ?>