<?php get_header(); ?>

<div class="content">
	<?php
	foreach(get_posts(array('post_type'=>'team','orderby'=>'menu_order','order'=>'ASC','posts_per_page'=>-1)) as $member): ?>
	<div class="member">
		<div class="header">
			<?php
			if (has_post_thumbnail($member->ID)) {
				echo get_the_post_thumbnail($member->ID,'full');
			} ?>
			<div>
				<h1 class="name"><?php
					$name = explode(',',$member->post_title);
					echo '<span class="name-first">'.$name[1].'</span>';
					echo '<span class="name-last">'.$name[0].'</span> ';
				?>
				</h1>
				<h2><?php echo get_field('position',1,$member->ID)[1]; ?></h2>
			</div>
		</div>
	<p><?php echo $member->post_content; ?></p>
</div>

<?php endforeach; ?>
</div>

<?php get_footer(); ?>