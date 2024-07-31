const {
    ui: { Button, Header, HeaderTags, ButtonSizes, Divider },
  } = shelter;
  
export function ThemesPage() {
    return(
        <>
      <Header tag={HeaderTags.H1}>Themes</Header>
      <Divider mt mb />
      <Button size={ButtonSizes.MAX} onClick={window.armcord.openThemesWindow}>Open Theme Manager</Button>
    </>
    )
}
