<?php get_header(); ?>

<div class="content">
	<?php
		query_posts(array('post_type'=>get_query_var('post_type'),'orderby'=>'menu_order','order'=>'ASC','posts_per_page'=>-1));
		if (have_posts()) : while (have_posts()) : the_post();
	?>
	<div class="member">
		<div class="header">
			<?php
			if (has_post_thumbnail()) {
				the_post_thumbnail('full');
			} ?>
			<div>
				<h1 class="name"><?php
					$name = explode(',',$post->post_title);
					echo '<span class="name-first">'.$name[1].'</span>';
					echo '<span class="name-last">'.$name[0].'</span> ';
				?>
				</h1>
				<h2><?php echo get_field('position',1)[1]; ?></h2>
			</div>
		</div>
	<p><?php echo $post->post_content; ?></p>
	</div>
	<?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>