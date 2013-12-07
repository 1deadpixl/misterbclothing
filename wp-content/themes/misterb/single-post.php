<?php 
get_header();
?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<div class="content">
	<h1><? the_title(); ?></h1>
	<? echo get_the_post_thumbnail($post->ID,'post-image');?>
	<? the_content(); ?>

	<div class="related">
		<h1>You May Also Be Interested In</h1>
		<ul>
		<? $cats = wp_get_post_categories($post->ID);
		$exclude_cat_posts = array($post->ID);
		$exclude_brands = array();
		foreach($cats as $cat) {
			if ($cat != 1) {
				$samecat_posts = get_posts(array('category' => $cat, 'exclude' => $exclude_cat_posts));
				foreach($samecat_posts as $samecat_post) {
					$id = $samecat_post->ID;
					array_push($exclude_cat_posts,$id);
					echo '<li><a href="'.get_permalink( $id ).'">'.$samecat_post->post_title.'</a></li>';
				}
				$rel_brands = get_posts(array('post_type' => 'brand','name' => get_categories(array('include'=>$cat))[0]->slug,'exclude' => $exclude_brands ));
				foreach($rel_brands as $rel_brand) {
					echo '<li><a href="'.get_permalink( $id ).'">'.$rel_brand->post_title.'</a></li>';
				}

			}
		}
		?>
		</ul>
	</div>
</div>
<?php endwhile; endif; ?>
<?php get_footer(); ?>