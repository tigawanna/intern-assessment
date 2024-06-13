# PAYD Intern Assessment

> This was accomplished in 2 afternoons and this pull equset took a while as i fell ill around the time i got the email
## styling and design
 - I mostly used tailwindcss and daisyui for the thems and used chakarui for specific components like inputs and modals 
- since there's no easy way to make them share themes it's best to keep them separate and have separate mechanisms to trigger dark mode (they all seem to be using css variables but daisyui uses `data-theme` while chakra uses `class` , a helper to unite these 2 is possible)

## features

- list view with filtering and caching and suspensful data-fetching with react query
![light-mode-posts](https://github.com/tigawanna/intern-assessment/assets/72096712/0d98ce18-1c74-400a-bdbd-3684148ec77e)
- dark mode
![list-dark-mode](https://github.com/tigawanna/intern-assessment/assets/72096712/a0db0880-1d40-4a89-a6eb-6f08a508e41f)


- filter results with total count
![filter-list](https://github.com/tigawanna/intern-assessment/assets/72096712/800ec4d8-4d64-4191-990d-ed3ebe4b5995)
> [!NOTE]
> Filtering is being done by filtering the react-query cache and not by making a new query , since the filtering endpoint only filters by post ID which makes it hard to search for posts by title

```tsx
	const query = useSuspenseQuery({
		queryKey: ["posts"],
		queryFn: () => {
			return fetch("https://jsonplaceholder.typicode.com/posts").then(
				(res) => res.json() as Promise<Post[]>,
			);
		},
		select(data) {
			if (keyword) {
				return data.filter((post) =>
					post.title.toLowerCase().includes(keyword.toLowerCase()),
				);
			}
			return data;
		},
		staleTime: 1000 * 60 * 5,
	});
```

- add post modal
- ![add-post-modal](https://github.com/tigawanna/intern-assessment/assets/72096712/d314bd27-540d-4de0-8127-254e3dd81d3c)

- edit/delete post modal
![update-post-modal](https://github.com/tigawanna/intern-assessment/assets/72096712/f00e6106-7fea-4cbd-aace-81c1b1bbdc5f)



> [!NOTE]
> The updates aren't persisted server side so i modify the local react query cache to display the changes 

```tsx
  const update_mutation = useMutation({
    mutationFn: updatePost,
    onMutate: (variables) => {
      qc.setQueryData(["posts"], (old: any) => {
        return old.map((post: Post) => {
          return post.id === variables.post.id ? variables.post : post;
        });
      });
      onClose();
    },})
```

<video controls src="https://github.com/tigawanna/intern-assessment/assets/72096712/ee32e344-281a-411d-aacc-db2a9198f19a" title="Brief video"></video>


