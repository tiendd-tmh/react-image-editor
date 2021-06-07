import React from "react"
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
const myTheme = {
  // Theme object to extends default dark theme.
};
export const Demo = () => {
  return (
    <>
      <h1>Demo</h1>
      <ImageEditor
        includeUI={{
          loadImage: {
            path: 'image.jpeg',
            name: 'SampleImage',
          },
          theme: myTheme,
          menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter'],
          initMenu: 'filter',
          uiSize: {
            width: '1000px',
            height: '700px',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
    </>
  )
}